import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Home(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../../img/1.png")} style={styles.img} />
      <Text style={styles.detail}>
        With an Updated motor, and integrated anti-theft tech the Frank scooters
        are custom-tuned for the ultimate riding experience.
      </Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  img: {
    height: "50%",
    width: "120%",
    resizeMode: "contain",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  detail: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 30,
  },
});
