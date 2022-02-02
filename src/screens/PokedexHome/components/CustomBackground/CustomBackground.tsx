import React from "react";
import Svg, { Path, Polygon } from "react-native-svg";
import Layout from "../../../../constants/Layout";

export default function SkewBorder() {
  const { window } = Layout;
  const width = window.width;
  const height = window.height;
  const biggerSquare = {
    bottomLeft: `M${width * 0.37}`,
    topLeft: `${height} L${width * 0.611}`,
    rightSide: `0 ${width}`,
  };
  const detail = {
    bottomLeft: `M${width * 0.37}`,
    topLeft: `${height} L${width * 0.611}`,
    bottomRight: `0 ${width * 0.48}`,
    topRight: `0 ${width * 0.73}`,
  };

  return (
    <Svg
      width={width}
      height={height}
      style={{ position: "absolute", right: 0 }}
    >
      <Path
        fill="#fa7248"
        d={`${biggerSquare.bottomLeft},${biggerSquare.topLeft},${biggerSquare.rightSide},${biggerSquare.rightSide},${height}`}
      />
      <Path
        fill="#f4523b"
        d={`${detail.bottomLeft},${detail.topLeft},${detail.topRight},${detail.bottomRight},${height}`}
      />
    </Svg>
  );
}
