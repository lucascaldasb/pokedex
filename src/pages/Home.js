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
          <TextInput placeholder="Procurar" style={styles.input} />
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
          img={require("../assets/1.png")}
          onClick={() => navigation.navigate("Detail")}
        >
          Bulbasaur
        </CardHome>
        <CardHome
          img={require("../assets/25.png")}
          onClick={() => alert("CLICOU")}
        >
          Pikachu
        </CardHome>
        <CardHome
          img={require("../assets/4.png")}
          onClick={() => alert("CLICOU")}
        >
          Charmander
        </CardHome>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <CardHome
          img={require("../assets/304.png")}
          onClick={() => alert("CLICOU")}
        >
          Aron
        </CardHome>
        <CardHome
          img={require("../assets/12.png")}
          onClick={() => alert("CLICOU")}
        >
          Butterfree
        </CardHome>
        <CardHome
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
          img={require("../assets/92.png")}
          onClick={() => alert("CLICOU")}
        >
          Gastly
        </CardHome>
        <CardHome
          img={require("../assets/152.png")}
          onClick={() => alert("CLICOU")}
        >
          Mew
        </CardHome>
        <CardHome
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
