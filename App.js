import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "./src/pages/LoginPage"

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="Login" component={ LoginPage } />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const options = {
    title: "Netflix Pirata",
    headerStyle: {
        backgroundColor: "#FF2E3E",
    },
    headerTitleStyle: {
        fontSize: 30,
    },
    headerTintColor: "#FFF",
    headerTitleAlign: "center",
}
