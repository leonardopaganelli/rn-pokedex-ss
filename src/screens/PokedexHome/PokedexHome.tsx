import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./components";
import Layout from "../../constants/Layout";
import CustomBackground from "./components/CustomBackground";
import AnimatedSprite from "../../components/AnimatedSprite";
import { View, Text } from "../../components/Themed";

const {
  window: { height },
} = Layout;
export default function PokedexHome() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomBackground />
      <Header />
      <View style={{ flexDirection: "row", flex: 1 }}>
        <AnimatedSprite
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Text style={{ flex: 1 }}>Right Side</Text>
      </View>
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
