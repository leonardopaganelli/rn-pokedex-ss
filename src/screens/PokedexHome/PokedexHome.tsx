import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./components";
import Layout from "../../constants/Layout";

const {
  window: { height },
} = Layout;
export default function PokedexHome() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fdeaf3",
    height: height,
    width: "100%",
  },
});
