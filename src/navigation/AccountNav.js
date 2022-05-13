import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Account from '../screens/Account'

const Stack = createNativeStackNavigator()

export default function AccountNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={Account} options={{
            title: 'My Account',
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