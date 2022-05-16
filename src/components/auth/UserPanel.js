import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import useAuth from '../../hooks/useAuth'

export default function UserPanel() {
  const { auth, logout } = useAuth()
  return (
    <View style={styles.content}>
      <View style={styles.user}>
        <Text>Welcome,{auth.username} </Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  content:{
    marginHorizontal: 20,
    marginVertical: 20,
  }
})