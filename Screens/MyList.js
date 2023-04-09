import { Pressable, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react'
import Graph from '../Components/Graph';
import data from '../Data.json'
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function MyList() {
  const navigatoin = useNavigation()
    const dummyData = data.coins
    function renderFunction(itemData){
      const item = itemData.item
      function pressHandler(){
        console.log("Pressed")
        navigatoin.navigate("Details",{coinTitle: item.title})
      };
     
      return(
        <SafeAreaView>
          <Pressable onPress={pressHandler}>
              <Graph title={item.title} price={item.price} timestamp={item.timestamp}/>
          </Pressable>
         </SafeAreaView>
      
      )
    }
  return (
    <FlatList keyExtractor={(item) => item.id} data={dummyData} renderItem={renderFunction} showsVerticalScrollIndicator={false}  contentContainerStyle = {{flexGrow: 1, justifyContent: 'center',padding:10,paddingVertical:10}} />
      
     
    
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

// <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center',padding:10,paddingVertical:70 }}>
      //  <SafeAreaView>
      //   <Graph title="BTC" price={[1220, 1245, 1228,1233,1244, 1280, 1299, 1243]} timestamp={[ -3, -2, -1,"Today",1,2,3]}/>
      //   <Graph title="ETH" price={[343, 399, 380,344,333, 328, 345, 320]} timestamp={[ -3, -2, -1,"Today",1,2,3]}/>
      //   <Graph title="VSG" price={[233, 345, 432,323,433, 432, 401, 234]} timestamp={[ -3, -2, -1,"Today",1,2,3]}/>
      //   <Graph title="KDI" price={[456, 654, 435,464,546, 453, 643, 545]} timestamp={[ -3, -2, -1,"Today",1,2,3]}/>
      //   </SafeAreaView>
      // </ScrollView>