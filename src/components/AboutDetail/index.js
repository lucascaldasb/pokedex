import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function AboutDetail(props) {
  return (
    <View style={styles.infoAbout}>
      <View>
        <View style={styles.weightArea}>
          <FontAwesome5 name="weight" size={20} color="black" />
          <Text style={{ marginLeft: 8 }}>{props.weight} kg</Text>
        </View>
        <Text style={styles.weightText}>Width</Text>
      </View>
      <View>
        <View style={styles.heightArea}>
          <FontAwesome5 name="ruler-vertical" size={20} color="black" />
          <Text style={{ marginLeft: 8 }}>{props.height} m</Text>
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
            {props.Fskill}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 10,
            }}
          >
            {props.Sskill}
          </Text>
        </View>
        <Text style={styles.skillsText}>Skills</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
