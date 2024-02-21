import React, { forwardRef, useCallback, useMemo } from "react";
import { Button, Dimensions, View } from "react-native";
import Animated, {
  createAnimatedPropAdapter,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, Path } from "react-native-svg";
import ExpandingCircle from "./expanding-circle";

const { width, height } = Dimensions.get("window");

interface Coordinate {
  x: number;
  y: number;
}

const RADIAN = Math.PI / 180;

const mathSign = (value: number) => {
  if (value === 0) {
    return 0;
  }
  if (value > 0) {
    return 1;
  }

  return -1;
};

const getDeltaAngle = (startAngle: number, endAngle: number) => {
  const sign = mathSign(endAngle - startAngle);
  const deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);

  return sign * deltaAngle;
};

const polarToCartesian = (
  cx: number,
  cy: number,
  radius: number,
  angle: number
): Coordinate => ({
  x: cx + Math.cos(-RADIAN * angle) * radius,
  y: cy + Math.sin(-RADIAN * angle) * radius,
});

const getSectorPath = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
}: {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
}) => {
  const angle = getDeltaAngle(startAngle, endAngle);

  // When the angle of sector equals to 360, star point and end point coincide
  const tempEndAngle = startAngle + angle;
  const outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
  const outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);

  let path = `M ${outerStartPoint.x},${outerStartPoint.y}
    A ${outerRadius},${outerRadius},0,
    ${+(Math.abs(angle) > 180)},${+(startAngle > tempEndAngle)},
    ${outerEndPoint.x},${outerEndPoint.y}
  `;

  if (innerRadius > 0) {
    const innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
    const innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
    path += `L ${innerEndPoint.x},${innerEndPoint.y}
            A ${innerRadius},${innerRadius},0,
            ${+(Math.abs(angle) > 180)},${+(startAngle <= tempEndAngle)},
            ${innerStartPoint.x},${innerStartPoint.y} Z`;
  } else {
    path += `L ${cx},${cy} Z`;
  }

  return path;
};

const AnimatedPath = Animated.createAnimatedComponent(Path);

const adapter = createAnimatedPropAdapter(
  (props) => {
    if (Object.keys(props).includes('d')) {
      props.d = { type: 0, payload: getSectorPath({
        cx: width / 2,
        cy: width / 2,
        innerRadius: 0,
        outerRadius: width / 2,
        startAngle: 0,
        endAngle: parseInt(props.d as string),
      }) };
    }
  },
  ['d']
);

const ExamplesReanimated: React.FC = () => {
  const progress = useSharedValue(0);
    const d = getSectorPath({
      cx: width / 2,
      cy: width / 2,
      innerRadius: 0,
      outerRadius: width / 2,
      startAngle: 0,
      endAngle: progress.value,
    });
  const animatedProps = useAnimatedProps(() => {

    return { d: d };
  }, [], adapter);



  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Svg height={width} width={width} viewBox={`0 0 ${width} ${width}`}>
        <AnimatedPath animatedProps={animatedProps} fill="#DA0C81" />
      </Svg>
      <Button
        title="Click me"
        onPress={() => {
          progress.value = withTiming(progress.value + 30);
        }}
      />
    </View>
  );
};

export default ExamplesReanimated;
