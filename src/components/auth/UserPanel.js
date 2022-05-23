import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useCallback, useState} from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { size } from 'lodash'
import useAuth from '../../hooks/useAuth'
import { getPokemonsFavorites } from '../../api/Favorite'

export default function UserPanel() {
  const { auth, logout } = useAuth()
  const [totalFavorites, setTotalFavorites] = useState(0)
  
  useFocusEffect(
    useCallback(() => {
      try {
        (async () => {
          const response = await getPokemonsFavorites()
          setTotalFavorites(size(response))
        })()
      } catch (error) {
        setTotalFavorites(0)
      }
    }, [auth])
  )

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Name" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Favorites" text={totalFavorites} />
      </View>
      <View style={styles.button}>
        <Button title="Logout" onPress={logout} />
      </View>
    </View>
  )
}

function ItemMenu(props) {
  const { title, text } = props
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text style={styles.text}>{text}</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
  content:{
    marginHorizontal: 20,
    marginVertical: 20,
  },
  titleBlock:{
    marginBottom: 30,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent:{
    marginBottom: 20,
  },
  itemMenu:{
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemMenuTitle:{
    fontWeight: 'bold',
    paddingRight: 10,
    width:120,
  },
  button: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 60,
        marginRight: 60,
  },
})