import { ScrollView,View, Text } from 'react-native'
import React from 'react'
import Graph from './Graph'
import Chart from './Chart'
import Bar from './Bar'
export default function Details() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1,padding:10}}>
      <View style={{ justifyContent:'center'}}>
      <View style={{ justifyContent:'center',alignItems:"center"}}>
      <Text style={{fontWeight:"bold", fontSize:24}} >Current Price: $3942</Text>
      <Text style={{fontWeight:"200", fontSize:18}} >Ethereum</Text>
      </View>
      <View style={{justifyContent:'space-evenly',alignItems: 'center',flexDirection:"row", paddingVertical:15,marginVertical:14,backgroundColor:"#FFFFFF", borderRadius:14,padding:10,shadowColor:"black",shadowOffset:{width:0,height:0},shadowOpacity:0.04,shadowRadius:8}}>
      <View style={{alignItems: 'center',}}>
        <Text style={{fontWeight:"bold", fontSize:20,color:"#30ca10"}} > Up 3.5%</Text>
        <Text style={{fontWeight:"300", fontSize:18,color:"#47C22E"}} >Last week</Text>
      </View>
      <View style={{alignItems: 'center'}}>
      <Text style={{fontWeight:"bold", fontSize:20,color:"#CA1010"}} > Down 13.5%</Text>
      <Text style={{fontWeight:"300", fontSize:18,color:"#C22E35"}} >Next week</Text>
      </View>
      </View>
      </View>
      <Text style={{alignSelf:"center",fontSize:25,marginTop: 20,}}>Performance graph</Text>
     <Graph  price={[1220, 1245, 1228,1233,1244, 1280, 1299, 1243]} timestamp={[ -3, -2, -1,"Today",1,2,3]} fromDetails/>
     <Chart/>
     <Text style={{alignSelf:"center",fontSize:25,marginTop: 20,}}>Last 6 months trend</Text>
     <Bar/>
      </ScrollView>
  )
}