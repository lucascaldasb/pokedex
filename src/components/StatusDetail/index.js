import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ProgressBar } from "react-native-paper";

export default function StatusDetail(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
      }}
    >
      <View style={styles.infoStatus}>
        <Text style={[styles.baseText, { color: props.color }]}>HP</Text>
        <Text style={[styles.baseText, { color: props.color }]}>ATK</Text>
        <Text style={[styles.baseText, { color: props.color }]}>DEF</Text>
        <Text style={[styles.baseText, { color: props.color }]}>SATK</Text>
        <Text style={[styles.baseText, { color: props.color }]}>SDEF</Text>
        <Text style={[styles.baseText, { color: props.color }]}>SPD</Text>
      </View>

      <View>
        <Text style={styles.baseNumber}>{props.hp}</Text>
        <Text style={styles.baseNumber}>{props.atk}</Text>
        <Text style={styles.baseNumber}>{props.def}</Text>
        <Text style={styles.baseNumber}>{props.satk}</Text>
        <Text style={styles.baseNumber}>{props.sdef}</Text>
        <Text style={styles.baseNumber}>{props.spd}</Text>
      </View>

      <View style={{ marginTop: 5 }}>
        <ProgressBar
          style={styles.progressBar}
          color={props.color}
          progress={props.hp / 100}
        />
        <ProgressBar
          style={styles.progressBar}
          color={props.color}
          progress={props.atk / 100}
        />
        <ProgressBar
          style={styles.progressBar}
          color={props.color}
          progress={props.def / 100}
        />
        <ProgressBar
          style={styles.progressBar}
          color={props.color}
          progress={props.satk / 100}
        />
        <ProgressBar
          style={styles.progressBar}
          color={props.color}
          progress={props.sdef / 100}
        />
        <ProgressBar
          style={styles.progressBar}
          color={props.color}
          progress={props.spd / 100}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoStatus: {
    flexDirection: "column",
    marginLeft: 30,
  },
  baseText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 15,
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
