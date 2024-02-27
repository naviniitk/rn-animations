import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";

export default function ItemDetails({
  navigation,
}: StackScreenProps<ParamListBase, "ItemDetails">) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Item Details</Text>
    </View>
  );
}
