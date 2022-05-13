import { View, Text, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { capitalize } from 'lodash'
import React from 'react'
import getColorByType from '../../utils/GetColorByType'

export default function Header(props) {
  const { name, order, image, types } = props
  const color = getColorByType(types)
  const bgStyles = { 
      backgroundColor: color, 
      width: '100%', 
      height: 400, 
      position: 'absolute', 
      borderBottomEndRadius: 300,
      borderBottomLeftRadius: 300,
      Transform: [{ scaleX: 2 }],
    }

  return (
    <>
        <View style={bgStyles} />
      <SafeAreaView style={styles.content}>
          <View style={styles.header}>
              <Text style={styles.name}>{capitalize(name)}</Text>
              <Text style={styles.number}>{`${order}`.padStart(3, 0)}</Text>
          </View>
          <View style={styles.contentImg}>
              <Image source={{ uri: image }} style={styles.image} />
          </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
    },
    name: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#fff',
    },
    number: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
    contentImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 300,
        resizeMode: 'contain',
    },
})