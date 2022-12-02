import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function CardHome(props) {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={styles.container}>
        <Text style={styles.idText}>#001</Text>
        <Image source={props.img} style={styles.homecardImg} />
        <View style={styles.homecardArea}>
          <Text style={styles.homecardText}>{props.children}</Text>
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
    borderColor: "#74CB48",
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: "space-between",
  },
  homecardImg: {
    width: 65,
    height: 65,
  },
  homecardArea: {
    backgroundColor: "#74CB48",
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
    color: "#74CB48",
    fontSize: 8,
  },
});
