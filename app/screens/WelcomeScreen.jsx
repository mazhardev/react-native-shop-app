import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems:'center'
  },
  loginButton: {
    backgroundColor: "red",
    width: "100%",
    height: 70,
  },
  registerButton: {
    backgroundColor: "green",
    width: "100%",
    height: 70,
  },
});

export default WelcomeScreen;
