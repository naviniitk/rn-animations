import { MotiView } from "moti";
import React from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Radial() {
  return (
    <MotiView
      style={{
        width: width / 2,
        height: 1,
        backgroundColor: "#DA0C81",
        transformOrigin: "100%",
      }}
      from={{
        transform: [{ translateX: -width / 4 }, { rotateZ: "0deg" }],
      }}
      animate={{
        transform: [{ translateX: -width / 4 }, { rotateZ: "180deg" }],
      }}
      transition={{
        type: "timing",
        duration: 2000,
      }}
    />
  );
}
