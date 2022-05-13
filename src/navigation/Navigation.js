import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AccountNav from './AccountNav'
import PokedexNav from './PokedexNav'
import FavoriteNav from './FavoriteNav'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
        initialRouteName="Pokedex"
        screenOptions={{ headerShown: false }}
        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: '#000',
            style: {
                backgroundColor: '#fff',
                borderTopColor: '#000',
                borderTopWidth: 1,
                height: 60,
                paddingTop: 5,
                paddingBottom: 5,
            },
            labelStyle: {
                fontSize: 12,
                fontWeight: 'bold',
                marginBottom: 5,
            },
            tabStyle: {
                paddingTop: 1,
                paddingBottom: 1,
            }
        }}
    >
        <Tab.Screen name='My Account' component={AccountNav} options={{
            tabBarIcon: ({ color, size }) => (
                <Icon name="user" color={color} size={size} />
            ),
        }}/>
        <Tab.Screen name='Pokedex' component={PokedexNav} options={{
            tabBarLabel: ' ',
            tabBarIcon: () => renderPokeball(),
        }} />
        <Tab.Screen name='Favorites' component={FavoriteNav} options={{
            tabBarIcon: ({ color, size }) => (
                <Icon name="heart" color={color} size={size} />
            )
        }} />
    </Tab.Navigator>
  )
}

const renderPokeball = () => (
  <Image
    source={require("../assets/pokeball.png")}
    style={{ width: 75, height: 75, top: -15 }}
  />
)