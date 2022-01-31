import React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import PokeballIcon from "../../../../components/PokeballIcon";
import { Text, View } from "../../../../components/Themed";
import Layout from "../../../../constants/Layout";

const { isXSmallDevice } = Layout;

export default function Counter({
  quantity,
  style,
  iconType,
}: {
  quantity: Number;
  style: StyleProp<ViewStyle>;
  iconType: "default" | "blank";
}) {
  return (
    <View style={[styles.container, style]}>
      <PokeballIcon iconType={iconType} />
      <Text style={styles.text}>{quantity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#585858",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginLeft: isXSmallDevice ? 8 : 20,
    color: "#e3e3e3",
  },
});
