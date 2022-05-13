import { View } from 'react-native'
import React from 'react'
import { getPokemon } from '../api/Pokemon'
import { getPokemonDetailsByUrl } from '../api/Pokemon'
import { useEffect, useState } from 'react'
import PokemonList from '../components/PokemonList'

export default function PokedexList() {
  const [pokemons, setPokemons] = useState([])
  const[nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemon(nextUrl)
      setNextUrl(response.next)

      const pokemonsArray = []
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrl(pokemon.url)

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray])
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
    </View>
  )
}