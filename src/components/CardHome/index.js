import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function CardHome(props) {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={[styles.container, { borderColor: props.color }]}>
        <Text style={[styles.idText, { color: props.color }]}>#{props.id}</Text>
        <Image source={props.img} style={styles.homecardImg} />
        <View style={[styles.homecardArea, { backgroundColor: props.color }]}>
          <Text style={styles.homecardText}>{props.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 110,
    paddingVertical: "2%",
    paddingHorizontal: "3%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: "space-between",
    marginLeft: 5,
    marginBottom: 7,
  },
  homecardImg: {
    width: 70,
    height: 70,
  },
  homecardArea: {
    width: "107%",
    height: "25%",
    padding: 5,
    position: "absolute",
    bottom: 0,
  },
  homecardText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
    color: "#fff",
    textAlign: "center",
  },
  idText: {
    position: "absolute",
    right: 0,
    alignSelf: "center",
    fontSize: 8,
  },
});
