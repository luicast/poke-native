import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonDetailsById } from '../api/Pokemon'
import Header from '../components/Pokemon/Header'
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'

export default function Pokemon(props) {
  const { navigation, route:{ params } } = props
  const [pokemon, setPokemon] = useState(null)


  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsById(params.id)
        setPokemon(response)
      } catch (error) {
        navigation.goBack()
      }
    })()
  }, [params])

  if (!pokemon) return null

  return (
    <ScrollView>
      <Header 
      name={pokemon.name} 
      order={pokemon.order} 
      image={pokemon.sprites.other['official-artwork'].front_default}
      types={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  )
}