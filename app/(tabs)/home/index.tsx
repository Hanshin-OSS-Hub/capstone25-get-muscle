import { Ionicons } from "@expo/vector-icons";
import { Image as ExpoImage } from "expo-image";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { styles } from "./styles";

export const options = {
  tabBarLabel: "홈",
};

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.logoBox}>
              <ExpoImage
                source={require("@/assets/images/get-muscle-logo.png")}
                style={styles.logoImage}
                contentFit="contain"
              />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.appName}>득근득근</Text>
              <Text style={styles.appSubName}>Get Muscle</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={styles.quickActionsContainer}>
          <TouchableOpacity
            style={[styles.quickActionButton, styles.routineButton]}
          >
            <Ionicons
              name="play"
              size={32}
              color="#fff"
              style={styles.quickActionIcon}
            />
            <Text style={styles.quickActionText}>루틴 시작</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quickActionButton, styles.reservationButton]}
          >
            <Ionicons
              name="calendar-outline"
              size={32}
              color="#fff"
              style={styles.quickActionIcon}
            />
            <Text style={styles.quickActionText}>기구 예약</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quickActionButton, styles.recordButton]}
          >
            <Ionicons
              name="create-outline"
              size={32}
              color="#fff"
              style={styles.quickActionIcon}
            />
            <Text style={styles.quickActionText}>운동 기록</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>최근 운동 기록</Text>
          <View style={styles.emptyCard}>
            <Ionicons
              name="time-outline"
              size={32}
              color="#999"
              style={styles.emptyCardIcon}
            />
            <Text style={styles.emptyCardText}>아직 운동 기록이 없습니다</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>오늘의 추천</Text>
          <View style={styles.recommendationCard}>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Ionicons
                name="star"
                size={24}
                color="#FFD700"
                style={styles.recommendationIcon}
              />
              <Ionicons
                name="star"
                size={24}
                color="#FFD700"
                style={styles.recommendationIcon}
              />
            </View>
            <Text style={styles.recommendationText}>
              운동을 시작하면 맞춤 추천을 받을 수 있습니다
            </Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={[styles.floatingButton, { bottom: 10 + insets.bottom }]}
      >
        <ExpoImage
          source={require("@/assets/images/chatbot_logo.png")}
          style={styles.chatbotIcon}
          contentFit="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
