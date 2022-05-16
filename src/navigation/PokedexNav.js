import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PokedexList from '../screens/PokedexList'
import Pokemon from '../screens/Pokemon'

const Stack = createNativeStackNavigator()

export default function PokedexNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="PokedexList" component={PokedexList} options={{
            title: 'Pokelist',
            headerStyle: {
                backgroundColor: 'red',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }} />
        <Stack.Screen name="Pokemon" component={Pokemon} options={{
            title: '',
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            
        }} />
    </Stack.Navigator>
  )
}
  