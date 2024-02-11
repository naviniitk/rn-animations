import React, { useCallback, useRef } from "react";
import { Animated, Easing, Pressable, Text, View } from "react-native";

const FALL_HEIGHT = 200;

export default function BouncyBall() {
  const translateY = useRef(new Animated.Value(-FALL_HEIGHT)).current;
  const height = translateY.interpolate({
    inputRange: [-FALL_HEIGHT, -FALL_HEIGHT / 2, -50, 0],
    outputRange: [FALL_HEIGHT, FALL_HEIGHT, FALL_HEIGHT, FALL_HEIGHT * 0.05],
  });

  const animateBounce = useCallback(() => {
    return Animated.loop(
      Animated.sequence([
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: false,
          overshootClamping: true,
          friction: 4,
          tension: 40,
        }),
        Animated.spring(translateY, {
          toValue: -FALL_HEIGHT,
          useNativeDriver: false,
          friction: 6,
          tension: 20,
          overshootClamping: true,
        }),
      ]),

      {
        iterations: 10,
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
            height: height,
            borderRadius: 100,
            bottom: 200,
            transform: [{ translateY }],
          },
        ]}
      />
      <View
        style={{
          position: "absolute",
          bottom: 200,
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
