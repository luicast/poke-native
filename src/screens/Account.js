import { View, Text } from 'react-native'
import React from 'react'
import LoginForm from '../components/auth/LoginForm'
import UserPanel from '../components/auth/UserPanel'
import useAuth from '../hooks/useAuth'

export default function Account() {
  const { auth } = useAuth()

  return (
    <View>
      {auth ? <UserPanel />:<LoginForm />}
    </View>
  )
}
