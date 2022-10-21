import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

function Content({ item }) {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={item.img} style={styles.img} />
        <View style={styles.box}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.detail}>{item.detail}</Text>
        </View>
      </View>
    </View>
  );
}

export default Content;

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
    textAlign: "left",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 10,
  },
});
