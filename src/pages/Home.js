import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import api from "../service/api";
import CardHome from "../components/CardHome/index";

function getTypeColor(type) {
  switch (type) {
    case "normal":
      return "#AAA67F";
      break;
    case "rock":
      return "#B69E31";
      break;
    case "ghost":
      return "#70559B";
      break;
    case "fighting":
      return "#C12239";
      break;
    case "steel":
      return "#B7B9D0";
      break;
    case "flying":
      return "#A891EC";
      break;
    case "water":
      return "#6493EB";
      break;
    case "poison":
      return "#A43E9E";
      break;
    case "grass":
      return "#74CB48";
      break;
    case "ground":
      return "#DFC16B";
      break;
    case "psychic":
      return "#FB5584";
      break;
    case "bug":
      return "#A7B723";
      break;
    case "ice":
      return "#9AD6DF";
      break;
    case "fire":
      return "#F57D31";
      break;
    case "dark":
      return "#75574C";
      break;
    case "eletric":
      return "#F9CF30";
      break;
    case "fairy":
      return "#E69EAC";
      break;
    case "dragon":
      return "#7037FF";
      break;
    default:
      return "black";
  }
}

export default function Home() {
  const navigation = useNavigation();

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get("/pokemon");
      const { results } = response.data;

      const payLoadPokemons = await Promise.all(
        results.map(async (pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url);

          return {
            name: pokemon.name,
            id,
            types,
          };
        })
      );
      setPokemons(payLoadPokemons);
      console.log(payLoadPokemons);
    }
    getAllPokemons();
  }, []);

  async function getMoreInfo(url) {
    const response = await api.get(url);
    const { id, types } = await response.data;

    return {
      id,
      types,
    };
  }

  return (
    <View style={{ backgroundColor: "#f7f7f7" }}>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={20} color="#666666" />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
      </View>

      <View>
        <FlatList
          style={{ marginHorizontal: 30 }}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.id.toString()}
          renderItem={({ item: pokemon }) => (
            <CardHome
              name={pokemon.name}
              id={pokemon.id}
              color={getTypeColor(pokemon.types.name)}
              img={{
                url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
              }}
              onClick={() => navigation.navigate("Detail")}
            />
          )}
        />
      </View>
    </View>
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
