# 커밋 메시지 가이드 - 파일 및 폴더별 설명

각 파일과 폴더에 대한 커밋 메시지 형식의 간단한 설명입니다.

## 📁 폴더 구조 설명

```
feat: [Folder] 앱 화면 및 라우팅 디렉토리 (app/)
feat: [Folder] 하단 탭 네비게이션 화면 디렉토리 (app/(tabs)/)
feat: [Folder] 로그인 화면 디렉토리 (app/login/)
feat: [Folder] 회원가입 화면 디렉토리 (app/signup/)
feat: [Folder] 홈 화면 디렉토리 (app/(tabs)/home/)
feat: [Folder] 운동 화면 디렉토리 (app/(tabs)/exercise/)
feat: [Folder] 통계 화면 디렉토리 (app/(tabs)/statistics/)
feat: [Folder] 설정 화면 디렉토리 (app/(tabs)/settings/)
feat: [Folder] 재사용 가능한 컴포넌트 디렉토리 (components/)
feat: [Folder] UI 컴포넌트 디렉토리 (components/ui/)
feat: [Folder] 앱 상수 정의 디렉토리 (constants/)
feat: [Folder] 커스텀 훅 디렉토리 (hooks/)
feat: [Folder] 이미지 및 리소스 디렉토리 (assets/)
feat: [Folder] 이미지 파일 디렉토리 (assets/images/)
feat: [Folder] 스크립트 디렉토리 (scripts/)
```

---

## 📱 앱 설정 및 루트 파일

```
feat: [Config] 프로젝트 의존성 및 스크립트 설정 (package.json)
feat: [Config] Expo 앱 설정 및 아이콘 경로 (app.json)
feat: [Config] TypeScript 컴파일러 설정 (tsconfig.json)
feat: [Config] ESLint 린터 설정 (eslint.config.js)
feat: [Config] Git 추적 제외 파일 목록 (.gitignore)
feat: [Config] Expo TypeScript 타입 정의 (expo-env.d.ts)
```

## 🎯 앱 라우팅 및 레이아웃

```
feat: [Layout] 루트 레이아웃 및 네비게이션 설정 (app/_layout.tsx)
feat: [Layout] 앱 진입점 - 로그인 화면으로 리다이렉트 (app/index.tsx)
feat: [Layout] 하단 탭 네비게이션 레이아웃 (app/(tabs)/_layout.tsx)
feat: [Modal] 모달 화면 컴포넌트 (app/modal.tsx)
```

## 🔐 인증 화면

```
feat: [Login] 로그인 화면 컴포넌트 (app/login/index.tsx)
feat: [Login] 로그인 화면 스타일 (app/login/styles.ts)
feat: [Signup] 회원가입 화면 컴포넌트 (app/signup/index.tsx)
feat: [Signup] 회원가입 화면 스타일 (app/signup/styles.ts)
```

## 🏠 탭 화면 - 홈

```
feat: [Home] 홈 화면 컴포넌트 - 루틴 시작, 기구 예약, 운동 기록 (app/(tabs)/home/index.tsx)
feat: [Home] 홈 화면 스타일 (app/(tabs)/home/styles.ts)
```

## 💪 탭 화면 - 운동

```
feat: [Exercise] 운동 화면 컴포넌트 (app/(tabs)/exercise/index.tsx)
feat: [Exercise] 운동 화면 스타일 (app/(tabs)/exercise/styles.ts)
```

## 📊 탭 화면 - 통계

```
feat: [Statistics] 통계 화면 컴포넌트 (app/(tabs)/statistics/index.tsx)
feat: [Statistics] 통계 화면 스타일 (app/(tabs)/statistics/styles.ts)
```

## ⚙️ 탭 화면 - 설정

```
feat: [Settings] 설정 화면 컴포넌트 - 로그아웃 기능 (app/(tabs)/settings/index.tsx)
feat: [Settings] 설정 화면 스타일 (app/(tabs)/settings/styles.ts)
```

## 🧩 재사용 컴포넌트

```
feat: [Component] 햅틱 피드백 탭 버튼 컴포넌트 (components/haptic-tab.tsx)
feat: [Component] 테마 지원 텍스트 컴포넌트 (components/themed-text.tsx)
feat: [Component] 테마 지원 뷰 컴포넌트 (components/themed-view.tsx)
feat: [Component] 외부 링크 컴포넌트 (components/external-link.tsx)
feat: [Component] 웨이브 애니메이션 컴포넌트 (components/hello-wave.tsx)
feat: [Component] 패럴랙스 스크롤 뷰 컴포넌트 (components/parallax-scroll-view.tsx)
```

## 🎨 UI 컴포넌트

```
feat: [UI] SF Symbols 아이콘 컴포넌트 (components/ui/icon-symbol.tsx)
feat: [UI] iOS 전용 SF Symbols 아이콘 컴포넌트 (components/ui/icon-symbol.ios.tsx)
feat: [UI] 접기/펼치기 컴포넌트 (components/ui/collapsible.tsx)
```

## 🎨 테마 및 상수

```
feat: [Theme] 앱 테마 색상 및 폰트 정의 (constants/theme.ts)
```

## 🪝 커스텀 훅

```
feat: [Hook] 색상 스킴 감지 훅 (hooks/use-color-scheme.ts)
feat: [Hook] 웹 플랫폼용 색상 스킴 훅 (hooks/use-color-scheme.web.ts)
feat: [Hook] 테마 색상 가져오기 훅 (hooks/use-theme-color.ts)
```

## 🖼️ 이미지 리소스

```
feat: [Assets] 앱 메인 로고 이미지 (assets/images/get-muscle-logo.png)
feat: [Assets] 챗봇 아이콘 이미지 (assets/images/chatbot_logo.png)
feat: [Assets] 앱 아이콘 이미지 (assets/images/icon.png)
```

## 📜 스크립트

```
feat: [Script] 프로젝트 리셋 스크립트 (scripts/reset-project.js)
```

## 📄 문서

```
feat: [Docs] 프로젝트 README 파일 (README.md)
feat: [Docs] 추가 README 파일 (README 2.md)
```

---

## 📋 전체 파일 및 폴더 목록 (커밋 메시지 형식)

### 폴더 구조

```
feat: [Folder] 앱 화면 및 라우팅 디렉토리 (app/)
feat: [Folder] 하단 탭 네비게이션 화면 디렉토리 (app/(tabs)/)
feat: [Folder] 로그인 화면 디렉토리 (app/login/)
feat: [Folder] 회원가입 화면 디렉토리 (app/signup/)
feat: [Folder] 홈 화면 디렉토리 (app/(tabs)/home/)
feat: [Folder] 운동 화면 디렉토리 (app/(tabs)/exercise/)
feat: [Folder] 통계 화면 디렉토리 (app/(tabs)/statistics/)
feat: [Folder] 설정 화면 디렉토리 (app/(tabs)/settings/)
feat: [Folder] 재사용 가능한 컴포넌트 디렉토리 (components/)
feat: [Folder] UI 컴포넌트 디렉토리 (components/ui/)
feat: [Folder] 앱 상수 정의 디렉토리 (constants/)
feat: [Folder] 커스텀 훅 디렉토리 (hooks/)
feat: [Folder] 이미지 및 리소스 디렉토리 (assets/)
feat: [Folder] 이미지 파일 디렉토리 (assets/images/)
feat: [Folder] 스크립트 디렉토리 (scripts/)
```

### 설정 파일

```
feat: [Config] 프로젝트 의존성 및 스크립트 설정 (package.json)
feat: [Config] Expo 앱 설정 및 아이콘 경로 (app.json)
feat: [Config] TypeScript 컴파일러 설정 (tsconfig.json)
feat: [Config] ESLint 린터 설정 (eslint.config.js)
feat: [Config] Git 추적 제외 파일 목록 (.gitignore)
feat: [Config] Expo TypeScript 타입 정의 (expo-env.d.ts)
```

### 앱 라우팅 및 레이아웃

```
feat: [Layout] 루트 레이아웃 및 네비게이션 설정 (app/_layout.tsx)
feat: [Layout] 앱 진입점 - 로그인 화면으로 리다이렉트 (app/index.tsx)
feat: [Layout] 하단 탭 네비게이션 레이아웃 (app/(tabs)/_layout.tsx)
feat: [Modal] 모달 화면 컴포넌트 (app/modal.tsx)
```

### 인증 화면

```
feat: [Login] 로그인 화면 컴포넌트 (app/login/index.tsx)
feat: [Login] 로그인 화면 스타일 (app/login/styles.ts)
feat: [Signup] 회원가입 화면 컴포넌트 (app/signup/index.tsx)
feat: [Signup] 회원가입 화면 스타일 (app/signup/styles.ts)
```

### 탭 화면

```
feat: [Home] 홈 화면 컴포넌트 - 루틴 시작, 기구 예약, 운동 기록 (app/(tabs)/home/index.tsx)
feat: [Home] 홈 화면 스타일 (app/(tabs)/home/styles.ts)
feat: [Exercise] 운동 화면 컴포넌트 (app/(tabs)/exercise/index.tsx)
feat: [Exercise] 운동 화면 스타일 (app/(tabs)/exercise/styles.ts)
feat: [Statistics] 통계 화면 컴포넌트 (app/(tabs)/statistics/index.tsx)
feat: [Statistics] 통계 화면 스타일 (app/(tabs)/statistics/styles.ts)
feat: [Settings] 설정 화면 컴포넌트 - 로그아웃 기능 (app/(tabs)/settings/index.tsx)
feat: [Settings] 설정 화면 스타일 (app/(tabs)/settings/styles.ts)
```

### 컴포넌트

```
feat: [Component] 햅틱 피드백 탭 버튼 컴포넌트 (components/haptic-tab.tsx)
feat: [Component] 테마 지원 텍스트 컴포넌트 (components/themed-text.tsx)
feat: [Component] 테마 지원 뷰 컴포넌트 (components/themed-view.tsx)
feat: [Component] 외부 링크 컴포넌트 (components/external-link.tsx)
feat: [Component] 웨이브 애니메이션 컴포넌트 (components/hello-wave.tsx)
feat: [Component] 패럴랙스 스크롤 뷰 컴포넌트 (components/parallax-scroll-view.tsx)
feat: [UI] SF Symbols 아이콘 컴포넌트 (components/ui/icon-symbol.tsx)
feat: [UI] iOS 전용 SF Symbols 아이콘 컴포넌트 (components/ui/icon-symbol.ios.tsx)
feat: [UI] 접기/펼치기 컴포넌트 (components/ui/collapsible.tsx)
```

### 테마 및 훅

```
feat: [Theme] 앱 테마 색상 및 폰트 정의 (constants/theme.ts)
feat: [Hook] 색상 스킴 감지 훅 (hooks/use-color-scheme.ts)
feat: [Hook] 웹 플랫폼용 색상 스킴 훅 (hooks/use-color-scheme.web.ts)
feat: [Hook] 테마 색상 가져오기 훅 (hooks/use-theme-color.ts)
```

### 리소스 및 기타

```
feat: [Assets] 앱 메인 로고 이미지 (assets/images/get-muscle-logo.png)
feat: [Assets] 챗봇 아이콘 이미지 (assets/images/chatbot_logo.png)
feat: [Assets] 앱 아이콘 이미지 (assets/images/icon.png)
feat: [Script] 프로젝트 리셋 스크립트 (scripts/reset-project.js)
feat: [Docs] 프로젝트 README 파일 (README.md)
feat: [Docs] 추가 README 파일 (README 2.md)
```

---

## 📝 사용 방법

1. **폴더 생성 시**: 폴더 구조 섹션의 메시지 사용
2. **파일 추가 시**: 해당 카테고리의 메시지 사용
3. **커밋 시**: 위 형식에 맞춰 커밋 메시지 작성

## 🎯 카테고리 설명

- `[Folder]`: 디렉토리/폴더
- `[Config]`: 설정 파일
- `[Layout]`: 레이아웃 및 네비게이션
- `[Login]`: 로그인 관련
- `[Signup]`: 회원가입 관련
- `[Home]`: 홈 화면
- `[Exercise]`: 운동 화면
- `[Statistics]`: 통계 화면
- `[Settings]`: 설정 화면
- `[Component]`: 재사용 컴포넌트
- `[UI]`: UI 컴포넌트
- `[Theme]`: 테마 관련
- `[Hook]`: 커스텀 훅
- `[Assets]`: 이미지 및 리소스
- `[Script]`: 스크립트
- `[Docs]`: 문서
- `[Modal]`: 모달 화면
