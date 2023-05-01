import { View, Text } from 'react-native'
import React from 'react'
import Card from './Card'

export default function SearchCard({children}) {
  return (
    <Card>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            {children}
          </View>
         </Card>
  )
}