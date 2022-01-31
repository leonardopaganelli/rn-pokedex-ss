import React from "react";
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Line,
  NumberProp,
  Rect,
} from "react-native-svg";

interface PokeballIconProps {
  size?: NumberProp;
  iconType?: "default" | "blank";
}

const defaultProps: PokeballIconProps = {
  size: 22,
  iconType: "default",
};

export default function PokeballIcon(props: PokeballIconProps) {
  const { size, iconType } = {
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
    strokeWidth: isDefaultType ? "9%" : "0",
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

  return (
    <Svg width={size} height={size}>
      <Defs>
        <ClipPath id="cut-off-bottom">
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
        clipPath="url(#cut-off-bottom)"
      />
      <Line x1="3%" x2="97%" y1="50%" y2="50%" {...strokeStyle} />
      <Circle
        {...centerCircle}
        {...strokeStyle}
        r="17%"
        fill={colorByType.secondary}
      />
    </Svg>
  );
}
