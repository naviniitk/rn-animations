import React, { forwardRef } from "react";
import { Button, Dimensions, View } from "react-native";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Svg, { Circle, Path } from "react-native-svg";

const { width, height } = Dimensions.get("window");

const CircularSector = forwardRef(
  (
    {
      startAngle,
      endAngle,
      radius,
      stroke,
      fill,
      cx,
      cy,
    }: {
      startAngle: number;
      endAngle: number;
      radius: number;
      stroke: string;
      fill: string;
      cx: number;
      cy: number;
    },
    ref
  ) => {
    const d = describeArc(cx, cy, radius, startAngle, endAngle);

    return <Path ref={ref} d={d} stroke={stroke} fill={fill} />;
  }
);

const describeArc = (
  centerX: number,
  centerY: number,
  radius: number,
  startAngle: number,
  endAngle: number
) => {
  const startRadians = startAngle * (Math.PI / 180);
  const endRadians = endAngle * (Math.PI / 180);

  // Calculate initial coordinates (adjust for center origin)
  const startX = centerX + radius * Math.cos(startRadians);
  const startY = centerY + radius * Math.sin(startRadians);

  // Calculate ending coordinates (adjust for center origin)
  const endX = centerX + radius * Math.cos(endRadians);
  const endY = centerY + radius * Math.sin(endRadians);

  // Construct the SVG path string
  const largeArcFlag = Math.abs(endRadians - startRadians) > Math.PI ? 1 : 0;
  const d = `M ${centerX},${centerY}
          L ${startX},${startY}
          A ${radius},${radius} 0 ${largeArcFlag} 0 ${endX},${endY}
          L ${centerX},${centerY}
          Z`;

  return d;
};

const AnimatedCircle = Animated.createAnimatedComponent(CircularSector);

const ExamplesReanimated: React.FC = () => {
  const progress = useSharedValue(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Animated.View style={[{ width: width, height: 100, backgroundColor: "violet" }, animatedStyles]} /> */}
      <Svg height={width} width={width} viewBox={`0 0 ${width} ${width}`}>
        <AnimatedCircle
          cx={width / 2}
          cy={width / 2}
          startAngle={270}
          endAngle={0}
          radius={width / 2}
          stroke="#DEAD"
          fill="#DEADED"
        />
      </Svg>
      <Button
        title="Click me"
        onPress={() => {
          progress.value = withSpring(progress.value + 10);
        }}
      />
    </View>
  );
};

export default ExamplesReanimated;
