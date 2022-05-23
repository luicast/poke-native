import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getPokemonsFavorites } from '../api/Favorite'
import { getPokemonDetailsById } from '../api/Pokemon'
import PokemonList from '../components/PokemonList'
import NoLogged from '../components/NoLogged'
import useAuth from '../hooks/useAuth'

export default function FavList() {
  const [pokemons, setPokemons] = useState([])
  const { auth } = useAuth()
    
  useFocusEffect(
    useCallback(() => {
      if (auth) {
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

          setPokemons(pokemonsArray)
        })()
      }
    }, [auth])
  )

 return (
    !auth ? (<NoLogged />)
    : (
        <PokemonList pokemons={pokemons} />
      )
  )
}