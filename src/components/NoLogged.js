import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

export default function NoLogged() {
  const navigation = useNavigation()

  return (
    <View style={styles.content}>
      <Text style={styles.text}>You need to logged, please</Text>
      <Button title="Login" onPress={() => navigation.navigate('Account')} />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

})