import { FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props

  const loadMore = () => {
      loadPokemons()
    }

  return (
     <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && (
                    <ActivityIndicator 
                        size="large" 
                        style={styles.spinner} 
                        color='red'
                    />
                )
            }
        />
    );
}
const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === 'android' ? 5 : 0,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === 'android' ? 60 : 30,
    },
})