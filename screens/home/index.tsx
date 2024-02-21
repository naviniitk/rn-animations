import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { EllipseAnimated } from "../../components";
import {
  Gesture,
  GestureDetector,
  PanGesture,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export default function Home({
  navigation,
}: StackScreenProps<ParamListBase, "Home">) {
  

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    
        <EllipseAnimated />

    </View>
  );
}
