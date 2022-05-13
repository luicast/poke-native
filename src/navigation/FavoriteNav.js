import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FavList from '../screens/FavList'

const Stack = createNativeStackNavigator()

export default function FavoriteNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="FavoriteNav" component={FavList} options={{
            title: 'Favorites',
            headerStyle: {
                backgroundColor: 'red',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }} />
    </Stack.Navigator>
  )
}