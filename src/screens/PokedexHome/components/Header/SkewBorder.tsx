import React from "react";
import Svg, { Path } from "react-native-svg";
import Layout from "../../../../constants/Layout";

export default function SkewBorder() {
  const { window } = Layout;
  const width = window.width;
  const height = window.height;

  const biggerSquare = {
    bottomLeft: `M${width * 0.37}`,
    topLeft: `${height} L${width * 0.607}`,
    rightSide: `0 ${width}`,
  };

  return (
    <Svg width={width} height="66" style={{ position: "absolute", right: 0 }}>
      <Path
        fill="#333"
        d={`${biggerSquare.bottomLeft},${biggerSquare.topLeft},${biggerSquare.rightSide},${biggerSquare.rightSide},${height}`}
      />
    </Svg>
  );
}
``;
