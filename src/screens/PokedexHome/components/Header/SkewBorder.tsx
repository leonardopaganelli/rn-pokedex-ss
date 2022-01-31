import React from "react";
import Svg, { Polygon } from "react-native-svg";

export default function SkewBorder() {
  const width = 35;
  const height = 70;

  return (
    <Svg width={width} height={height}>
      <Polygon
        points={`${width},0 ${width},${height} 0,${height} 0`}
        fill="#333"
      />
    </Svg>
  );
}
``;
