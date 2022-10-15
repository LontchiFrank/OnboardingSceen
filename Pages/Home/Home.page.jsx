import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <Image source={require("../../img/1.png")} style={styles.img} />
        <View style={styles.box}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.detail}>
            With an Updated motor, and integrated anti-theft tech the Frank
            scooters are custom-tuned for the ultimate riding experience.
          </Text>
        </View>
      </View>
      <View style={styles.nav}>
        <Pressable style={styles.btn1}>
          <AntDesign name="arrowleft" color="#fff" size={25} />
        </Pressable>
        <Pressable style={styles.btn2}>
          <AntDesign name="arrowright" color="#fff" size={25} />
        </Pressable>
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
  title: {
    marginLeft: 24,
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
  },
  box: {},
  img: {
    height: "60%",
    width: "90%",
    marginBottom: 20,
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
  nav: {
    width: "100%",
    // height: 400,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    // alignItems: "flex-end",
  },
  btn1: {
    width: 66,
    height: 66,
    backgroundColor: "#4919a7",
    borderRadius: 66 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn2: {
    width: 66,
    height: 66,
    backgroundColor: "#4919a7",
    borderRadius: 66 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
