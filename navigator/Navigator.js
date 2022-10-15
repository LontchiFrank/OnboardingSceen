import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Pages/Home/Home.page";

const Stack = createStackNavigator();
// const screenOptionStyle = {
//   heaeShown: false,
// };

function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
