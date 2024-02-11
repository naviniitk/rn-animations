import React, { useCallback, useRef, useState } from "react";
import { Animated, Dimensions, TouchableOpacity, View } from "react-native";

const BUTTONS = [30, 60, 90];
const { width } = Dimensions.get("window");

export default function SharedButtons() {
  const animatedWidth = useRef(new Animated.Value(0)).current;
  const scale = animatedWidth.interpolate({
    inputRange: [0, 10, width * 0.6],
    outputRange: [0, 0, 1],
  });
  const [customOpen, setCustomOpen] = useState(false);

  const animationOpen = useCallback(() => {
    return Animated.timing(animatedWidth, {
      useNativeDriver: false,
      toValue: width * 0.6,
    });
  }, []);

  const animationClose = useCallback(() => {
    return Animated.timing(animatedWidth, {
      useNativeDriver: false,
      toValue: 0,
    });
  }, []);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 1,
        flexGrow: 0,
      }}
    >
      <Animated.View
        style={{
          flexDirection: "row",
          width: animatedWidth,
          overflow: "hidden",
        }}
      >
        {BUTTONS.map((item) => {
          return (
            <Animated.View key={item} style={{}}>
              <TouchableOpacity
                style={[
                  {
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                    backgroundColor: "#DA0C81",
                    borderRadius: 10,
                    marginHorizontal: 5,
                  },
                ]}
                activeOpacity={0.76}
              >
                <Animated.Text
                  style={[{ color: "#fff" }, { transform: [{ scale }] }]}
                >
                  {item}
                </Animated.Text>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </Animated.View>
      <TouchableOpacity
        style={[
          {
            paddingHorizontal: 20,
            paddingVertical: 8,
            backgroundColor: "#DA0C81",
            borderRadius: 10,
            marginHorizontal: 5,
          },
        ]}
        activeOpacity={0.76}
        onPress={() => {
          customOpen ? animationOpen().start() : animationClose().start();
          setCustomOpen(!customOpen);
        }}
      >
        <Animated.Text style={[{ color: "#fff" }]}>Custom</Animated.Text>
      </TouchableOpacity>
    </View>
  );
}
