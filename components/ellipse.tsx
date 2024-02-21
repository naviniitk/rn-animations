import React from "react";
import { Svg, Ellipse } from "react-native-svg";
import Animated, {
  createAnimatedPropAdapter,
  processColor,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Dimensions, ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const adapter = createAnimatedPropAdapter(
  (props) => {
    if (Object.keys(props).includes("fill")) {
      props.fill = { type: 0, payload: processColor(props.fill) };
    }
    if (Object.keys(props).includes("stroke")) {
      props.stroke = { type: 0, payload: processColor(props.stroke) };
    }
  },
  ["fill", "stroke"]
);

export default function EllipseAnimated() {
  const opacity = useSharedValue(1);

  const offset = useSharedValue({ x: 0, y: 0 });
  const isPressed = useSharedValue(false);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onChange((e) => {
      offset.value = {
        x: e.changeX + offset.value.x,
        y: e.changeY + offset.value.y,
      };
    })
    .onFinalize((e) => {
      offset.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
      isPressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
      ],
      // backgroundColor: isPressed.value ? "yellow" : "blue",
    };
  });

  React.useEffect(() => {
    // opacity.value = withRepeat(withTiming(1), -1, true);
  }, []);

  const ellipseAnimatedProps = useAnimatedProps(
    () => {
      const coordinates = { cx: width / 2, cy: width / 2, rx: 40, ry: 40 };

      return {
        cx: coordinates.cx,
        cy: coordinates.cy,
        rx: coordinates.rx,
        ry: coordinates.ry,
        stroke: "rgb(255,0,0)",
        fill: "yellow",
        opacity: 1,
        strokeWidth: 40,
      };
    },
    [],
    adapter
  );

  return (
    <GestureDetector gesture={gesture}>
      <AnimatedSvg width={width} height={height} viewBox={`0 0 ${width} ${width}`} style={[animatedStyles]}>
        <AnimatedEllipse animatedProps={ellipseAnimatedProps} />
      </AnimatedSvg>
    </GestureDetector>
  );
}
