import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AboutDetail from "../components/AboutDetail/index";
import TypeDetail from "../components/TypeDetail/index";
import StatusDetail from "../components/StatusDetail/index";

function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Informations",
  });

  return (
    <View>
      <View style={[styles.headerImg, { backgroundColor: "#74CB48" }]}>
        <View style={{ flexDirection: "row", margin: 24 }}>
          <Text style={styles.pokemonName}>Bulbasaur</Text>
          <Text style={styles.pokemonId}>#1</Text>
        </View>
        <Image
          source={require("../assets/bgpokeball.png")}
          style={styles.bgImg}
        />
        <Image source={require("../assets/1.png")} style={styles.pokemonImg} />

        <View style={styles.info}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TypeDetail color="#74CB48">Grass</TypeDetail>
            <TypeDetail color="#A43E9E">Poison</TypeDetail>
          </View>

          <Text style={[styles.about, { color: "#74CB48" }]}>About</Text>

          <AboutDetail
            weight="6,49"
            height="0,7"
            Fskill="Overgrow"
            Sskill="Clorophyll"
          />

          <Text style={[styles.statusBase, { color: "#74CB48" }]}>
            Status Base
          </Text>

          <StatusDetail
            hp="045"
            atk="049"
            def="049"
            satk="065"
            sdef="065"
            spd="045"
            color="#74CB48"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImg: {
    height: "100%",
    width: "100%",
  },
  bgImg: {
    width: 208,
    height: 208,
    position: "absolute",
    right: 8,
    top: 8,
    alignSelf: "center",
    opacity: 0.1,
  },
  pokemonImg: {
    width: 200,
    height: 200,
    marginHorizontal: 80,
    bottom: -20,
    zIndex: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  pokemonName: {
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
    marginTop: 24,
    position: "absolute",
    alignSelf: "center",
    left: 5,
    color: "#fff",
  },
  pokemonId: {
    fontFamily: "Poppins_700Bold",
    position: "absolute",
    right: 5,
    alignSelf: "center",
    color: "#fff",
    fontSize: 12,
  },
  info: {
    height: 485,
    width: "96%",
    alignSelf: "center",
    marginHorizontal: 4,
    margin: -20,
    backgroundColor: "#fff",
    borderWidth: 4,
    borderRadius: 8,
  },
  about: {
    marginTop: 20,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
  },
  statusBase: {
    marginTop: 30,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
  },
});

export default Detail;
