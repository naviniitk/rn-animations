import { MotiView } from "moti";
import React from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Radial() {
  return (
    <MotiView
      style={{
        width: 0,
        height: 0,
        // backgroundColor: "#DA0C81",
        // transformOrigin: "100%",
        borderTopWidth: width / 2,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderLeftWidth: width / 2,
        borderRightColor: "transparent",
        borderRightWidth: width / 2,
        borderBottomColor: "red",
        borderBottomWidth: width / 2,
        borderTopLeftRadius: width / 2,
        borderTopRightRadius: width / 2,
        borderBottomRightRadius: width / 2,
        borderBottomLeftRadius: width / 2,
      }}
      from={{
        transform: [{ rotateZ: "0deg" }],
      }}
      animate={{
        transform: [{ rotateZ: "360deg" }],
      }}
      transition={{
        type: "timing",
        duration: 2000,
        loop: true,
        repeatReverse: false,
      }}
    />
  );
}
