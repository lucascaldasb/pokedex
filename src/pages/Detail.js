import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";

function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Informations",
  });

  return (
    <View>
      <View style={styles.headerImg}>
        <View style={{ flexDirection: "row", margin: 24 }}>
          <Text style={styles.pokemonName}>Bulbasaur</Text>
          <Text style={styles.pokemonId}>#001</Text>
        </View>
        <Image
          source={require("../assets/bgpokeball.png")}
          style={styles.bgImg}
        />
        <Image source={require("../assets/1.png")} style={styles.pokemonImg} />

        <View style={styles.info}>
          <View style={styles.powers}>
            <Text style={styles.firstPower}>Grass</Text>
            <Text style={styles.secondPower}>Poison</Text>
          </View>

          <Text style={styles.about}>About</Text>

          <View style={styles.infoAbout}>
            <View>
              <View style={styles.weightArea}>
                <FontAwesome5 name="weight" size={20} color="black" />
                <Text style={{ marginLeft: 8 }}>6,9 kg</Text>
              </View>
              <Text style={styles.weightText}>Width</Text>
            </View>
            <View>
              <View style={styles.heightArea}>
                <FontAwesome5 name="ruler-vertical" size={20} color="black" />
                <Text style={{ marginLeft: 8 }}>0,7 m</Text>
              </View>
              <Text style={styles.heightText}>Height</Text>
            </View>
            <View>
              <View style={styles.skillsArea}>
                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontSize: 10,
                  }}
                >
                  Overgrow
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontSize: 10,
                  }}
                >
                  Clorophyll
                </Text>
              </View>
              <Text style={styles.skillsText}>Skills</Text>
            </View>
          </View>

          <Text style={styles.statusBase}>Status Base</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <View style={styles.infoStatus}>
              <Text style={styles.baseText}>HP</Text>
              <Text style={styles.baseText}>ATK</Text>
              <Text style={styles.baseText}>DEF</Text>
              <Text style={styles.baseText}>SATK</Text>
              <Text style={styles.baseText}>SDEF</Text>
              <Text style={styles.baseText}>SPD</Text>
            </View>

            <View>
              <Text style={styles.baseNumber}>045</Text>
              <Text style={styles.baseNumber}>049</Text>
              <Text style={styles.baseNumber}>049</Text>
              <Text style={styles.baseNumber}>065</Text>
              <Text style={styles.baseNumber}>065</Text>
              <Text style={styles.baseNumber}>045</Text>
            </View>

            <View style={{ marginTop: 5 }}>
              <ProgressBar
                style={styles.progressBar}
                color="#74CB48"
                progress={0.45}
              />
              <ProgressBar
                style={styles.progressBar}
                color="#74CB48"
                progress={0.49}
              />
              <ProgressBar
                style={styles.progressBar}
                color="#74CB48"
                progress={0.49}
              />
              <ProgressBar
                style={styles.progressBar}
                color="#74CB48"
                progress={0.65}
              />
              <ProgressBar
                style={styles.progressBar}
                color="#74CB48"
                progress={0.65}
              />
              <ProgressBar
                style={styles.progressBar}
                color="#74CB48"
                progress={0.45}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImg: {
    backgroundColor: "#74CB48",
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
  powers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  firstPower: {
    fontFamily: "Poppins_700Bold",
    fontSize: 15,
    marginRight: 16,
    backgroundColor: "#74CB48",
    color: "#fff",
    width: 60,
    height: 25,
    textAlign: "center",
  },
  secondPower: {
    fontFamily: "Poppins_700Bold",
    fontSize: 15,
    backgroundColor: "#A43E9E",
    color: "#fff",
    width: 60,
    height: 25,
    textAlign: "center",
  },
  about: {
    marginTop: 20,
    textAlign: "center",
    color: "#74CB48",
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
  },
  infoAbout: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  weightArea: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    paddingRight: 20,
    borderRightWidth: 1,
    borderRightColor: "#E0E0E0",
  },
  weightText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
    position: "absolute",
    color: "#666666",
    marginLeft: 30,
    marginTop: 40,
  },
  heightArea: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    paddingRight: 20,
    borderRightWidth: 1,
    borderRightColor: "#E0E0E0",
  },
  heightText: {
    fontFamily: "Poppins_400Regular",
    position: "absolute",
    fontSize: 10,
    color: "#666666",
    marginLeft: 10,
    marginTop: 40,
  },
  skillsArea: {
    marginTop: 6,
    marginRight: 5,
  },
  skillsText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
    position: "absolute",
    color: "#666666",
    marginTop: 40,
    marginRight: 5,
  },
  statusBase: {
    marginTop: 30,
    textAlign: "center",
    color: "#74CB48",
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
  },
  infoStatus: {
    flexDirection: "column",
    marginLeft: 30,
  },
  baseText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 15,
    color: "#74CB48",
    marginBottom: 7,
  },
  baseNumber: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    marginBottom: 7,
  },
  progressBar: {
    width: 100,
    height: 6,
    alignItems: "center",
    marginBottom: 23,
    borderRadius: 5,
  },
});

export default Detail;
