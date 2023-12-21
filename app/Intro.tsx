import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Dashboard from "./Dashboard";
import React from "react";

export const Intro = () => {
  return (
    <LinearGradient
      colors={["#1f1293", "#2520ab", "#282dc3", "#293bdd", "#2749f7"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <Dashboard />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  background: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
});
