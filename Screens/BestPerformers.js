import { StyleSheet,SafeAreaView, View,ScrollView, Text } from 'react-native'
import React from 'react'
import Graph from '../Components/Graph';
import Card from '../Components/UI/Card'
export default function BestPerformers() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center',padding:10,paddingVertical:70 }}>
    <SafeAreaView>
     <Graph title="LGBC" fromTop={31.4} price={[1220, 1245, 1228,1233,1244, 1280, 1299, 1243]} timestamp={[ -3, -2, -1,"Today",1,2,3]}/>
     <Graph title="MILP" fromTop={15.4} price={[343, 399, 380,344,333, 328, 345, 320]} timestamp={[ -3, -2, -1,"Today",1,2,3]}/>
     <Graph title="POV" fromTop={25.4} price={[233, 345, 432,323,433, 432, 401, 234]} timestamp={[ -3, -2, -1,"Today",1,2,3]}/>
     <Graph title="KDI" fromTop={15.4} price={[456, 654, 435,464,546, 453, 643, 545]} timestamp={[ -3, -2, -1,"Today",1,2,3]}/>
     </SafeAreaView>
   </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});