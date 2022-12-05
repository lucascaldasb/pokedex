import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import AboutDetail from "../components/AboutDetail/index";
import TypeDetail from "../components/TypeDetail/index";
import StatusDetail from "../components/StatusDetail/index";
import { useRoute, useNavigation } from "@react-navigation/native";
import api from "../service/api";
import getTypeColor from "../style/colors";

function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Informations",
  });

  const route = useRoute();
  const { pokemonId } = route.params;

  const [pokemon, setPokemon] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getPokemonDetail() {
      try {
        const response = await api.get(`/pokemon/${pokemonId}`);
        const { stats, abilities, id, name, types, height, weight } =
          response.data;

        const currentType = types[0].type.name;

        setPokemon({
          stats,
          abilities,
          id,
          name,
          types,
          height,
          weight,
          currentType,
        });
      } catch (error) {
        Alert.alert("Ops, something is wrong");
      } finally {
        setLoad(false);
      }
    }

    getPokemonDetail();
  }, []);

  return (
    <>
      {load ? (
        <>
          <Text style={{ marginTop: 200, marginLeft: 150 }}>Carregando...</Text>
        </>
      ) : (
        <View>
          <View
            style={styles.headerImg}
            backgroundColor={getTypeColor(pokemon.currentType)}
          >
            <View style={{ flexDirection: "row", margin: 24 }}>
              <Text style={styles.pokemonName}>{pokemon.name}</Text>
              <Text style={styles.pokemonId}>#{pokemonId}</Text>
            </View>
            <Image
              source={require("../assets/bgpokeball.png")}
              style={styles.bgImg}
            />
            <Image
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
              }}
              style={styles.pokemonImg}
            />

            <View style={styles.info}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {pokemon.types.map(({ type }) => (
                  <TypeDetail key={type.name} color={getTypeColor(type.name)}>
                    {type.name}
                  </TypeDetail>
                ))}
              </View>
              <Text
                style={styles.about}
                color={getTypeColor(pokemon.currentType)}
              >
                About
              </Text>
              <AboutDetail
                weight={pokemon.weight}
                height={pokemon.height}
                Fskill={pokemon.abilities[0].ability.name}
                Sskill={pokemon.abilities[1]?.ability.name}
              />
              <Text
                style={styles.statusBase}
                color={getTypeColor(pokemon.currentType)}
              >
                Base Status
              </Text>
              <StatusDetail
                hp={pokemon.stats[0].base_stat}
                atk={pokemon.stats[1].base_stat}
                def={pokemon.stats[2].base_stat}
                satk={pokemon.stats[3].base_stat}
                sdef={pokemon.stats[4].base_stat}
                spd={pokemon.stats[5].base_stat}
                color={getTypeColor(pokemon.currentType)}
              />
            </View>
          </View>
        </View>
      )}
    </>
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
    marginHorizontal: 100,
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
