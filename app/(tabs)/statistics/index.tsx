import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export const options = {
  tabBarLabel: "통계",
};

export default function StatisticsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>통계 화면 (준비 중)</Text>
    </View>
  );
}
