import React from "react";
import { View, StyleSheet } from "react-native";
import { Counter } from "..";
import { Text } from "../../../../components/Themed";
import Layout from "../../../../constants/Layout";
import SkewBorder from "./SkewBorder";

const {
  isMediumDevice,
  isSmallDevice,
  isXSmallDevice,
  window: { height, width },
} = Layout;

export default function Header() {
  return (
    <View style={[styles.container]}>
      <View style={[styles.leftSide]}>
        <Text style={[styles.leftText]}>Pokedéx</Text>
        <View style={styles.counterContainer}>
          <Counter quantity={1} iconType="blank" style={styles.counterMargin} />
          <Counter
            quantity={2}
            iconType="default"
            style={styles.counterMargin}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          flex: isSmallDevice ? 0 : 1,
        }}
      >
        {!isSmallDevice && <SkewBorder />}
        <View style={[styles.rightSide]}>
          <Text style={[styles.rightText]}>By Number</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  leftSide: {
    flexDirection: "row",
    flex: isSmallDevice ? 0 : 1,
    alignItems: "center",
    paddingHorizontal: isXSmallDevice ? 8 : 10,
    paddingVertical: 12,
    justifyContent: isMediumDevice ? "space-between" : "flex-start",
  },
  counterMargin: {
    marginLeft: width < 875 && width > 400 ? 10 : 14,
  },
  counterContainer: {
    flexDirection: "row",
  },
  leftText: {
    fontSize: 34,
  },
  rightText: {
    fontSize: 24,
    color: "#e3e3e3",
  },
  rightSide: {
    backgroundColor: "#333",
    paddingHorizontal: 10,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 0.82,
  },
  container: {
    justifyContent: "space-between",
    backgroundColor: "#ebdaa2",
    marginTop: 15,
    flexDirection: isMediumDevice ? "column" : "row",
    width: "100%",
  },
});
