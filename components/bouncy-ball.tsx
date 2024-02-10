import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

const FALL_HEIGHT = 200;

export default function BouncyBall() {
  const translateY = useRef(new Animated.Value(-FALL_HEIGHT)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          overshootClamping: true,
          bounciness: 20,
        }),
        Animated.spring(translateY, {
          toValue: -FALL_HEIGHT,
          useNativeDriver: true,
          bounciness: 1,
          overshootClamping: true,
        }),
      ])
    ).start(() => {});
  }, [translateY]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={[
          {
            position: "absolute",
            backgroundColor: "#DA0C81",
            width: 200,
            height: 200,
            borderRadius: 100,
            bottom: 200,
            transform: [{ translateY }],
          },
        ]}
      />
      <View
        style={{
          position: "absolute",
          bottom: 190,
          width: 200,
          height: 10,
          backgroundColor: "#DA0C81",
        }}
      />
    </View>
  );
}
