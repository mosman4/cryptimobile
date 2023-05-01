import { StyleSheet, ScrollView, Text, SafeAreaView ,View, FlatList, Alert} from 'react-native'
import React, { useContext, useEffect } from 'react'
import Card from '../Components/UI/Card'
import { Ionicons } from "@expo/vector-icons";
import SearchInput, { createFilter } from 'react-native-search-filter';
import SearchCard from '../Components/UI/SearchCard';
import { fetchMetricsHandler } from '../Components/Util/api';
import { DataContext } from '../Components/Util/context-store';
export default function Search() {
  const dataCxt = useContext(DataContext)

  useEffect(()=> { 
    async function getCoins(){
      try{
        const fetchedCoins = await fetchMetricsHandler();
        dataCxt.addCoins(fetchedCoins)
        //setLoading(false) 
      }catch(error){
        alert(error)
        //setLoading(false)
        console.log(error)
      }
    }
    getCoins()
    },[fetchMetricsHandler])

    function renderFunction(itemData){
      const item = itemData.item

      let itemInList = dataCxt.MyList.find((coins) => coins.title == item.title )
     
      function pressHandler1(){
        console.log("Pressed")
        dataCxt.addToMyList(item)
      }; 
      function pressHandler2(){
        Alert.alert("Are You Dumb?","Item already in the list")
      }; 
      // 
      return(
       
              <SafeAreaView>
                <SearchCard>
                    <Text style={{fontSize:15}}>{item.title}</Text>
                    {itemInList && <Ionicons name="checkmark-outline" size={23} color={"red"} onPress={pressHandler2} />}
                    {!itemInList && <Ionicons name="add-outline" size={23} color={"red"} onPress={pressHandler1} />}
                </SearchCard>
               </SafeAreaView>
        
        )
      
    }
  return (
    <SafeAreaView>
    <Text style={{fontSize:20, margin:15,marginTop:30}}>Please Add Some Coins: </Text>
    <FlatList keyExtractor={(item) => item.id} data={dataCxt.coins} renderItem={renderFunction} showsVerticalScrollIndicator={false}  contentContainerStyle = {{flexGrow: 1, justifyContent: 'center',padding:10,paddingVertical:10}} />
    </SafeAreaView>
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

{/* <SearchInput 
          caseSensitive={false}
          onChangeText={() => console.log('changing')} 
          style={{ minWidth:200,padding: 15,borderRadius:9,margin:18,backgroundColor:"white"}}
          placeholder="Search coins"
          autoCorrect={false}
          /> */}