import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonsFavorites } from '../api/Favorite'
import { getPokemonDetailsById } from '../api/Pokemon'
import PokemonList from '../components/PokemonList'
import useAuth from '../hooks/useAuth'

export default function FavList() {
  const [pokeFavs, setPokeFavs] = useState([])
  const { auth } = useAuth()

  useEffect(() => {
    if (auth.user) {
      (async () => {
        const response = await getPokemonsFavorites()
        const pokemonsArray = []
        for await (const id of response) {
          const pokemonDetails = await getPokemonDetailsById(id)

          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image: pokemonDetails.sprites.other["official-artwork"].front_default,
          });
        }

        setPokeFavs(pokemonsArray)
      })()
    }
  }, [auth])

 return (
    !auth ? (<Text>login please</Text>) 
    : (
        <PokemonList pokemons={pokeFavs} />
      )
  )
}