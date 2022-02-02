import { transform } from "@babel/core";
import React, { useEffect, useState } from "react";
import { Animated, Easing } from "react-native";
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Line,
  NumberProp,
  Rect,
} from "react-native-svg";
import uuid from "react-native-uuid";
import { View } from "../Themed";

interface PokeballIconProps {
  size?: NumberProp;
  iconType?: "default" | "blank";
  animated?: boolean;
  thinStroke?: boolean;
}

const defaultProps: PokeballIconProps = {
  size: 22,
  iconType: "default",
  animated: false,
  thinStroke: false,
};

export default React.memo(function PokeballIcon(props: PokeballIconProps) {
  const id = uuid.v4().toString();
  const { size, iconType, animated, thinStroke } = {
    ...defaultProps,
    ...props,
  };
  const centerCircle = {
    cx: "50%",
    cy: "50%",
  };
  const isDefaultType = iconType === "default";
  const strokeStyle = {
    stroke: isDefaultType ? "#585858" : "#c7c7c5",
    strokeWidth: isDefaultType ? (thinStroke ? "5%" : "9%") : "0",
  };
  const biggerCircleRadius = {
    r: "45%",
  };
  const colors = {
    default: {
      primary: "#d85c70",
      secondary: "#fff",
    },
    blank: { primary: "#c7c7c5", secondary: "#c7c7c5" },
  };

  const colorByType = colors[(iconType as "blank") || "default"];
  let rotation = new Animated.Value(0);
  const rotateData = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animation = Animated.loop(
    Animated.sequence([
      Animated.delay(150),
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1500,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: false,
      }),
    ])
  );

  useEffect(() => {
    if (animated) {
      animation.start();
    }
  }, [animated]);

  return (
    <Animated.View style={{ transform: [{ rotate: rotateData }] }}>
      <Svg width={size} height={size}>
        <Defs>
          <ClipPath id={id}>
            <Rect x="0" y="0" width="100%" height="50%" />
          </ClipPath>
        </Defs>
        <Circle
          {...centerCircle}
          {...strokeStyle}
          {...biggerCircleRadius}
          fill={colorByType.secondary}
        />
        <Circle
          {...centerCircle}
          {...strokeStyle}
          {...biggerCircleRadius}
          fill={colorByType.primary}
          clipPath={`url(#${id})`}
        />
        <Line x1="3%" x2="97%" y1="50%" y2="50%" {...strokeStyle} />
        <Circle
          {...centerCircle}
          {...strokeStyle}
          r="17%"
          fill={colorByType.secondary}
        />
      </Svg>
    </Animated.View>
  );
});
