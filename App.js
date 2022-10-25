import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./navigator/Navigator";
// import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <HomeStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
