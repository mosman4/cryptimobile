import { StyleSheet, ScrollView, Text, SafeAreaView ,View} from 'react-native'
import React from 'react'
import Card from '../Components/UI/Card'
import { Ionicons } from "@expo/vector-icons";
import SearchInput, { createFilter } from 'react-native-search-filter';
export default function Search() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, padding:10}}>
        <SafeAreaView>

        <SearchInput 
          caseSensitive={false}
          onChangeText={() => console.log('changing')} 
          style={{ minWidth:200,padding: 15,borderRadius:9,margin:18,backgroundColor:"white"}}
          placeholder="Search coins"
          autoCorrect={false}
          />
          
         <Card>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize:15}}>Bitcoin</Text>
            <Ionicons name="add-outline" size={23} color={"red"} />
          </View>
         </Card>
         <Card>
         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize:15}}>Ethereum</Text>
            <Ionicons name="add-outline" size={23} color={"red"} />
          </View>
         </Card>
         <Card>
         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize:15}}>Binance USD</Text>
            <Ionicons name="add-outline" size={23} color={"red"} />
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
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});