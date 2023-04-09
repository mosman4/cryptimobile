import { View, Text } from 'react-native'
import React from 'react'

export default function Card({children}) {
  return (
    <View style={{ paddingVertical:15,marginVertical:4,backgroundColor:"#FFFFFF", borderRadius:14,padding:20,shadowColor:"black",shadowOffset:{width:0,height:0},shadowOpacity:0.1,shadowRadius:8}}>
     {children}
    </View>
  )
}