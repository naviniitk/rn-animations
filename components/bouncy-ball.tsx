import React, { useCallback, useRef } from "react";
import { Animated, Pressable, Text, View } from "react-native";

const FALL_HEIGHT = 200;

export default function BouncyBall() {
  const translateY = useRef(new Animated.Value(-FALL_HEIGHT)).current;

  const animateBounce = useCallback(() => {
    return Animated.loop(
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
      ]),
      {
        iterations: 5,
      }
    );
  }, []);

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
      <Pressable
        style={{
          position: "absolute",
          bottom: 100,
          padding: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#DA0C81",
          backgroundColor: "#fff",
        }}
        onPress={() => {
          animateBounce().start();
        }}
      >
        <Text style={{ color: "#DA0C81" }}>Bounce</Text>
      </Pressable>
    </View>
  );
}
