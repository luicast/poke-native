import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user, userDetails } from '../../utils/userDB'
import useAuth from '../../hooks/useAuth'

export default function LoginForm() {
  const [error, setError] = useState('')
  const { login } = useAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError('')
      const { username, password } = formValue
      if (username === user.username && password === user.password) {
        login(userDetails)
      } else {
        setError('Username or password is incorrect, please try again')
      }
    }
  })
  
  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Username" 
        autoCapitalize='none' 
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        autoCapitalize='none' 
        secureTextEntry={true}
        value={formik.values.password} 
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <View style={styles.button}>
      <Button title="Login" onPress={formik.handleSubmit} />  
      </View>
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>   
    </View>
  )
}

function initialValues() {
  return {
    username: '',
    password: ''
  }
}

function validationSchema() {
  return {
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 12,
        padding: 10,
        borderRadius: 10,
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 60,
        marginRight: 60,
    },
    error: {
        color: 'red',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
    }
})