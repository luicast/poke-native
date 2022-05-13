import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import {map, capitalize} from 'lodash'

export default function Stats(props) {
  const { stats } = props

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {map(stats, (item, index) => (
          <View key={index} style={styles.block}>
              <View style={styles.blockTitle}>
                <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
              </View>
              <View style={styles.blockInfo}>
                <Text style={styles.value}>{item.base_stat}</Text>
                <View style={styles.bgBar}></View>
              </View>
          </View>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    block: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    blockTitle: {
        width: '30%',
    },
    statName: {
        fontSize: 12,
        color: '#6b6b6b'
    },
    blockInfo: {
        width: '70%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    value:{
        width: '12%',
        fontSize:12,
    }
})
