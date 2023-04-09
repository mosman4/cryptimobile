import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Card from '../Components/UI/Card';
import { Ionicons } from "@expo/vector-icons";
export default function Edit() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, padding:10,justifyContent:'center'}}>
        <SafeAreaView>
          <Card>
            <View style={{alignSelf:'center'}}>
            <Ionicons name="trash-outline" size={33} color={"black"} />
            </View>
          </Card>
         <Card>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize:15}}>Bitcoin</Text>
            <Ionicons name="trash-bin-outline" size={23} color={"red"} />
          </View>
         </Card>
         <Card>
         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize:15}}>Ethereum</Text>
            <Ionicons name="trash-bin-outline" size={23} color={"red"} />
          </View>
         </Card>
         <Card>
         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize:15}}>Binance USD</Text>
            <Ionicons name="trash-bin-outline" size={23} color={"red"} />
          </View>
         </Card>
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