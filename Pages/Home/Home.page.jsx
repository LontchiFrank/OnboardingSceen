import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <Image source={require("../../img/1.png")} style={styles.img} />
        <Text style={styles.detail}>
          With an Updated motor, and integrated anti-theft tech the Frank
          scooters are custom-tuned for the ultimate riding experience.
        </Text>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  contain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: "60%",
    width: "90%",
    resizeMode: "contain",
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
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
