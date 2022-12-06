import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./pages/Home.js";
import Detail from "./pages/Detail.js";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Pokédex",
            headerStyle: {
              backgroundColor: "#f7f7f7",
            },
            headerTitleStyle: {
              fontFamily: "Poppins_700Bold",
              fontSize: 24,
            },
            headerLeft: () => (
              <MaterialCommunityIcons
                name="pokeball"
                size={32}
                color="black"
                style={{ marginLeft: 85 }}
              />
            ),
          }}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
