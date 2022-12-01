import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Home() {
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
    paddingHorizontal: 15,
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
