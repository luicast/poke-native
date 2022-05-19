import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import useAuth from '../../hooks/useAuth'

export default function UserPanel() {
  const { auth, logout } = useAuth()
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
        <ItemMenu title="Favorites" text={`0 pokemons`} />
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