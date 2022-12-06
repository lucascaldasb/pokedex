import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import api from "../service/api";
import CardHome from "../components/CardHome/index";
import getTypeColor from "../style/colors";

export default function Home() {
  const { navigate } = useNavigation();

  const [pokemons, setPokemons] = useState([]);
  const [searchText, setSearchText] = useState("");

  function handleNavigation(pokemonId) {
    navigate("Detail", {
      pokemonId,
    });
  }

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
      if (searchText === "") {
        setPokemons(payLoadPokemons);
      } else {
        setPokemons(
          payLoadPokemons.filter((item) => {
            if (item.name.indexOf(searchText.toLocaleLowerCase()) > -1) {
              return true;
            } else {
              return false;
            }
          })
        );
      }
    }
    getAllPokemons();
  }, [searchText]);

  const handleStrOrderClick = () => {
    let newList = [...pokemons];

    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setPokemons(newList);
  };

  const handleNumOrderClick = () => {
    let newList = [...pokemons];

    newList.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

    setPokemons(newList);
  };

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
          <TextInput
            placeholder="Search"
            style={styles.input}
            onChangeText={(t) => setSearchText(t)}
          />
        </View>
        <TouchableOpacity
          style={{ marginRight: 10, marginLeft: 20 }}
          onPress={handleStrOrderClick}
        >
          <FontAwesome name="sort-alpha-asc" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={handleNumOrderClick}
        >
          <FontAwesome name="sort-numeric-asc" size={24} color="black" />
        </TouchableOpacity>
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
              color={getTypeColor(pokemon.types[0].type.name)}
              img={{
                url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
              }}
              onClick={() => handleNavigation(pokemon.id)}
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
    width: "70%",
    backgroundColor: "#fff",
    elevation: 2,
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 10,
    marginLeft: 20,
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
