import React from "react";
import { Image, View, StyleSheet } from "react-native";
function ViewImage() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.chairImage}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  chairImage: {
    width: "100%",
    height: "100%",
    top: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  closeIcon: {
    height: 50,
    width: 50,
    backgroundColor: "red",
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    position: "absolute",
    top: 40,
    right: 30,
  },
});
export default ViewImage;
