import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function PowerDetail(props) {
  return (
    <View style={styles.powers}>
      <Text style={[styles.firstPower, { backgroundColor: props.color }]}>
        {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: "#fff",
    width: 60,
    height: 25,
    textAlign: "center",
  },
});
