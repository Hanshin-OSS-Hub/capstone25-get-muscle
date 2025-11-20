import google.generativeai as genai
import json
import numpy as np
import faiss

# -------------------------------------------------------------
# 1. 설정 (API KEY + 모델)
# -------------------------------------------------------------
GOOGLE_API_KEY = "AIzaSyACSagKgx2-3192L_bH3xenxNX1bp0dWS0"   # ← 여기에 네 API 키
genai.configure(api_key=GOOGLE_API_KEY)

# 대답 생성용 모델
GEN_MODEL = "gemini-flash-latest"

# 임베딩용 모델 (v1 기준 이름)
EMBED_MODEL = "models/text-embedding-004"


# -------------------------------------------------------------
# 2. JSON 지식창고 불러오기
# -------------------------------------------------------------
def load_json_knowledge():
    with open("health_data.json", "r", encoding="utf-8") as f:
        return json.load(f)


# -------------------------------------------------------------
# 3. JSON → 텍스트 리스트로 변환
# -------------------------------------------------------------
def json_to_text_list(json_data):
    texts = []
    keys = []

    for topic, content in json_data.items():
        merged_text = topic + " " + " ".join(
            [" ".join(v) if isinstance(v, list) else v for v in content.values()]
        )
        texts.append(merged_text)
        keys.append(topic)

    return keys, texts


# -------------------------------------------------------------
# 4. 텍스트들을 임베딩(벡터)으로 변환
#    ⚠️ 여기서 GenerativeModel().embed_content가 아니라
#    genai.embed_content(...) 함수를 사용해야 함
# -------------------------------------------------------------
def embed_texts(text_list):
    vectors = []
    for text in text_list:
        res = genai.embed_content(
            model=EMBED_MODEL,
            content=text
        )
        vectors.append(res["embedding"])
    return np.array(vectors, dtype="float32")


# -------------------------------------------------------------
# 5. FAISS 인덱스 생성
# -------------------------------------------------------------
def create_faiss_index(embeddings):
    dim = embeddings.shape[1]
    index = faiss.IndexFlatL2(dim)
    index.add(embeddings)
    return index


# -------------------------------------------------------------
# 6. 사용자 질문 → 임베딩 → 가장 유사한 항목 찾기
# -------------------------------------------------------------
def search_similar(question, index, keys, json_data):
    res = genai.embed_content(
        model=EMBED_MODEL,
        content=question
    )
    q_emb = np.array(res["embedding"], dtype="float32").reshape(1, -1)

    distances, indices = index.search(q_emb, 1)  # 가장 유사한 1개
    best_key = keys[indices[0][0]]
    return best_key, json_data[best_key]


# -------------------------------------------------------------
# 7. 메인 헬스케어 챗봇 로직 (FAISS + RAG)
# -------------------------------------------------------------
def health_chatbot(question: str) -> str:
    json_data = load_json_knowledge()
    keys, text_list = json_to_text_list(json_data)
    embeddings = embed_texts(text_list)
    index = create_faiss_index(embeddings)

    best_key, info = search_similar(question, index, keys, json_data)

    prompt = f"""
당신은 전문적인 헬스케어 AI 어시스턴트입니다.
아래는 검색을 통해 찾은 전문 건강 정보입니다.

[관련 항목: {best_key}]
{info}

[사용자 질문]
{question}

위 자료를 기반으로, 친절하고 안전하게 조언을 제공하세요.
절대 의학적 진단이나 약 처방은 하지 마세요.
"""
    gen_model = genai.GenerativeModel(GEN_MODEL)
    response = gen_model.generate_content(prompt)
    return response.text


# -------------------------------------------------------------
# 8. 콘솔 대화 루프
# -------------------------------------------------------------
if __name__ == "__main__":
    print("헬스케어 챗봇 (종료하려면 '끝', 'exit', 'quit' 입력)")

    while True:
        user_q = input("\n나: ").strip()
        if user_q.lower() in ["끝", "exit", "quit"]:
            print("챗봇: 이용해 주셔서 감사합니다. 건강하세요! 😊")
            break

        try:
            answer = health_chatbot(user_q)
            print("\n챗봇:", answer)
        except Exception as e:
            print("\n[에러 발생]", repr(e))
            print("→ health_data.json, 인터넷, API 키 등을 확인해 보세요.")
