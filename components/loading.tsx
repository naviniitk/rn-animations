import { MotiView } from "moti";
import React from "react";
import { View } from "react-native";

const DATA = [0, 1, 2, 3];

export default function Loading() {
  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      {DATA.map((item) => (
        <MotiView
          key={item}
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: "#DA0C81",
          }}
          from={{
            transform: [{ translateY: 10 }],
          }}
          animate={{
            transform: [{ translateY: -10 }],
          }}
          transition={{
            type: "timing",
            duration: 400,
            delay: item * 100,
            repeat: Infinity,
          }}
        />
      ))}
    </View>
  );
}
