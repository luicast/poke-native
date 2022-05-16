import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import {map, capitalize} from 'lodash'

export default function Stats(props) {
  const { stats } = props

  const barStyle = (num) => {
    // const color = num > 49 ? '#00b894' : '#ff0000'
    if (num <= 49) {
      return{
        backgroundColor: '#ff0000',
        width: `${num}%`
      }  
    } else if (num >= 50 && num <= 70) {
        return{
          backgroundColor: '#ffd600',
          width: `${num}%`
        } 
    } else {
        return{
          backgroundColor: '#00b894',
          width: `${num}%`
        }    
    }
  }

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
                <View style={styles.bgBar}>
                  <View style={[styles.bar, barStyle(item.base_stat)]}></View>
                </View>
              </View>
          </View>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 60,
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
    },
    bgBar: {
        width: '88%',
        height: 5,
        backgroundColor: '#e6e6e6',
        borderRadius: 20,
        overflow: 'hidden',
    },
    bar: {
        height: 5,
        borderRadius: 20,
    },
})
