import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { BouncyBall } from "../../components";

export default function Home({
  navigation,
}: StackScreenProps<ParamListBase, "Home">) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <BouncyBall />
    </View>
  );
}
