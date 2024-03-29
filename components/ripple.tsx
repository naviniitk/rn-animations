import { MotiView } from "moti";
import React from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Ripple() {
  return (
    <MotiView
      style={{ width, height: width, borderRadius: width, backgroundColor: "#DA0C81" }}
      from={{
        scale: 0.5,
      }}
      animate={{
        scale: 0.8,
      }}
      transition={{
        type: "spring",
        duration: 1000,
        repeat: 5,
      }}
    />
  );
}
