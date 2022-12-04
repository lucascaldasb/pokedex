import React from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import CardHome from "../components/CardHome/index";

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={20} color="#666666" />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingBottom: 8,
        }}
      >
        <CardHome
          id="1"
          color="#74CB48"
          img={require("../assets/1.png")}
          onClick={() => navigation.navigate("Detail")}
        >
          Bulbasaur
        </CardHome>
        <CardHome
          id="25"
          color="#F9CF30"
          img={require("../assets/25.png")}
          onClick={() => alert("CLICOU")}
        >
          Pikachu
        </CardHome>
        <CardHome
          id="4"
          color="#F57D31"
          img={require("../assets/4.png")}
          onClick={() => alert("CLICOU")}
        >
          Charmander
        </CardHome>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <CardHome
          id="304"
          color="#B7B9D0"
          img={require("../assets/304.png")}
          onClick={() => alert("CLICOU")}
        >
          Aron
        </CardHome>
        <CardHome
          id="12"
          color="#A7B723"
          img={require("../assets/12.png")}
          onClick={() => alert("CLICOU")}
        >
          Butterfree
        </CardHome>
        <CardHome
          id="132"
          color="#AAA67F"
          img={require("../assets/132.png")}
          onClick={() => alert("CLICOU")}
        >
          Ditto
        </CardHome>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: 8,
        }}
      >
        <CardHome
          id="92"
          color="#70559B"
          img={require("../assets/92.png")}
          onClick={() => alert("CLICOU")}
        >
          Gastly
        </CardHome>
        <CardHome
          id="152"
          color="#FB5584"
          img={require("../assets/152.png")}
          onClick={() => alert("CLICOU")}
        >
          Mew
        </CardHome>
        <CardHome
          id="7"
          color="#6493EB"
          img={require("../assets/7.png")}
          onClick={() => alert("CLICOU")}
        >
          Squirtle
        </CardHome>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 16,
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "98%",
    backgroundColor: "#fff",
    elevation: 2,
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 10,
  },
  input: {
    fontFamily: "Poppins_400Regular",
    paddingVertical: 4,
    fontSize: 15,
    width: "98%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
