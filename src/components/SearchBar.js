import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function SearchBar({ searchValue, handleSearch }) {

  return (
    <View>
        <TextInput 
        style={styles.SearchBar} 
        placeholder="Search"
        value={searchValue}
        onChange={handleSearch}
        />
    </View>
  )
}
 const styles = StyleSheet.create({
     SearchBar: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 10,
            backgroundColor: '#fff',
        },
    })
