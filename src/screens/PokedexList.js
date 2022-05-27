import { View } from 'react-native'
import React from 'react'
import { getPokemon } from '../api/Pokemon'
import { getPokemonDetailsByUrl } from '../api/Pokemon'
import { useEffect, useState } from 'react'
import PokemonList from '../components/PokemonList'
import SearchBar from '../components/SearchBar'
import useAuth  from '../hooks/useAuth'

export default function PokedexList() {
  const [pokemons, setPokemons] = useState([])
  const[nextUrl, setNextUrl] = useState(null)
  const { searchValue, handleSearch } = useAuth()
  
  let searchPokemons = []
      if (!searchValue) {
        searchPokemons = pokemons
      } else {
        searchPokemons = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
        })
      }

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, [pokemons]);

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
      
      if (pokemons.length > 0) {
        setPokemons([...pokemons, ...pokemonsArray])
      } else { 
        setPokemons([...searchPokemons, ...pokemonsArray])
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <SearchBar searchValue={searchValue} handleSearch={handleSearch}/>
      <PokemonList pokemons={searchPokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
    </View>
  )
}