import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { TouchableOpacity, Swipeable } from "react-native-gesture-handler";
import Content from "../../Components/Content/Content.component";

function Home(props) {
  const [data, setData] = useState([
    {
      title: "Get Started",
      img: "../../img/1.png",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam risus, interdum eu arcu at, lacinia rutrum metus. Proin eu fermentum purus.",
    },
    {
      title: "Welcome",
      img: "../../img/img2.png",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam risus, interdum eu arcu at, lacinia rutrum metus. Proin eu fermentum purus.",
    },
    {
      title: "Discover",
      img: "../../img/3.png",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam risus, interdum eu arcu at, lacinia rutrum metus. Proin eu fermentum purus.",
    },
    {
      title: "Make Up UI KIT",
      img: "../../img/4.png",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam risus, interdum eu arcu at, lacinia rutrum metus. Proin eu fermentum purus.",
    },
  ]);
  const [index, setIndex] = useState(0);

  const addIndex = () => {
    setIndex(index + 1);
  };

  const getElement = (data) => {
    return data.slice(0, index).map((el) => {
      <Content title={el.title} img={el.img} detail={el.detail} />;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <Content
          title="Welcome"
          img={require("../../img/1.png")}
          detail="With an Updated motor, and integrated anti-theft tech the Frank
          scooters are custom-tuned for the ultimate riding experience."
        />
        {/* {getElement(data, index)} */}
      </View>
      <View style={styles.nav}>
        <View style={styles.steps}>
          <View style={styles.step1}></View>
          <View style={styles.step1}></View>
          <View style={styles.step1}></View>
          <View style={styles.step1}></View>
        </View>
        <View style={styles.holdPress}>
          <TouchableOpacity>
            <Pressable style={styles.btn1}>
              <AntDesign name="arrowleft" color="#fff" size={25} />
            </Pressable>
          </TouchableOpacity>
          <TouchableOpacity>
            <Pressable style={styles.btn2} onPress={() => addIndex()}>
              <AntDesign name="arrowright" color="#fff" size={25} />
            </Pressable>
          </TouchableOpacity>
        </View>
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
    textAlign: "left",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 10,
  },
  nav: {
    width: "100%",
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  btn1: {
    width: 58,
    height: 58,
    backgroundColor: "#4919a7",
    borderRadius: 58 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  btn2: {
    width: 58,
    height: 58,
    backgroundColor: "#4919a7",
    borderRadius: 58 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  holdPress: {
    paddingTop: 30,
    flexDirection: "row",
  },
  steps: {
    width: "60%",
    paddingTop: 40,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "flex-end",
    alignItems: "center",
  },
  step1: {
    width: 8,
    height: 8,
    backgroundColor: "#b394ef",
    borderRadius: 58 / 2,

    marginRight: 4,
  },
});
