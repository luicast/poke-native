import React, { useState, useEffect } from 'react'
import Heart from 'react-native-vector-icons/FontAwesome5'
import FillHeart from 'react-native-vector-icons/FontAwesome'
import { addPokemonFavorite, isPokemonFavorite, removePokemonFavorite } from '../../api/Favorite'

export default function FavIcon (props) {
  const { id } = props
  const [isFavorite, setIsFavorite] = useState(undefined)
  const [rCheck, setRCheck] = useState(false)
  const Icon = isFavorite ? FillHeart : Heart

  useEffect(() => {
    (async () =>{
      try {
        const response = await isPokemonFavorite(id)
        setIsFavorite(response)
      } catch (error) {
        setIsFavorite(false)
      }
    })()
  }, [id, rCheck])

  const onReloadCheck = () => {
    setRCheck((prev) => !prev)
  }
  
  const addFavorites = async () => {
    try {
      await addPokemonFavorite(id)
      onReloadCheck()
    } catch (error) {
      console.log(error)
    }
    
  };

  const removeFavorites = async () => {
    try {
      await removePokemonFavorite(id);
      onReloadCheck()
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Icon 
      name="heart" 
      size={20} 
      color="#fff" 
      style={{marginRight: 20}}
      onPress={isFavorite ? removeFavorites : addFavorites}
    />
  )
}