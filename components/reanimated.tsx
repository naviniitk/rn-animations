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
    }: {
      startAngle: number;
      endAngle: number;
      radius: number;
      stroke: string;
      fill: string;
    },
    ref
  ) => {
    const d = describeArc(radius, startAngle, endAngle);

    return <Path ref={ref} d={d} stroke={stroke} fill={fill} />;
  }
);

const describeArc = (radius: number, startAngle: number, endAngle: number) => {
  // Convert angles to radians
  const startRadians = startAngle * (Math.PI / 180);
  const endRadians = endAngle * (Math.PI / 180);

  // Calculate coordinates for start and end points
  const startX = radius * Math.cos(startRadians);
  const startY = radius * Math.sin(startRadians);
  const endX = radius * Math.cos(endRadians);
  const endY = radius * Math.sin(endRadians);

  // Construct the SVG path string
  const largeArcFlag = Math.abs(endRadians - startRadians) > Math.PI ? 1 : 0;
  const d = `M ${radius},${radius}
          L ${startX},${startY}
          A ${radius},${radius} 0 ${largeArcFlag} 0 ${endX},${endY}
          L ${radius},${radius}
          Z`;

  return d;
};

const AnimatedCircle = Animated.createAnimatedComponent(CircularSector);

const ExamplesReanimated: React.FC = () => {
  const progress = useSharedValue(0);

  console.log(progress.value);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Animated.View style={[{ width: width, height: 100, backgroundColor: "violet" }, animatedStyles]} /> */}
      <Svg height={width} width={width} viewBox={`0 0 ${width} ${width}`}>
        <AnimatedCircle
          startAngle={0}
          endAngle={progress.value}
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
