import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Image } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

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
            headerRight: () => (
              <>
                <TouchableOpacity style={{ marginRight: 10 }}>
                  <FontAwesome name="sort-alpha-asc" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginRight: 10 }}>
                  <FontAwesome
                    name="sort-numeric-asc"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </>
            ),
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
