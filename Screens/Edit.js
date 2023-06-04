import { StyleSheet, View, Text, SafeAreaView, Button, FlatList } from 'react-native'
import React, { useContext } from 'react'
import Card from '../Components/UI/Card';
import { Ionicons } from "@expo/vector-icons";
import { DataContext } from '../Components/Util/context-store';
import SearchCard from '../Components/UI/SearchCard';

export default function Edit() {
  const dataCxt = useContext(DataContext)
  const itemsExist = dataCxt.MyList
  function renderFunction(itemData){
    const item = itemData.item

    
    function pressHandler(){
      console.log("Pressed")
      dataCxt.removeFromList(item.title)

    }; 
    
   return (
   
        <SafeAreaView>
          <SearchCard>
          <Text style={{fontSize:15}}>{item.title}</Text>
          <Ionicons name="remove-circle-outline" size={23} color={"red"} onPress={pressHandler} />
          </SearchCard>
          
         </SafeAreaView>
 
  )
}

return (
  <SafeAreaView >

            
            
      { itemsExist && 
      <>
      <View style={{alignSelf:'center',margin:20,backgroundColor:"#ffffff",padding:15,borderRadius:90}}>
      <Ionicons name="trash-outline" size={33} color={"black"} />
      </View>
      <FlatList keyExtractor={(item) => item.id} data={dataCxt.MyList} renderItem={renderFunction} showsVerticalScrollIndicator={false}  contentContainerStyle = {{flexGrow: 1, justifyContent: 'center',padding:10,paddingVertical:10}} />
      </>
      }
      { itemsExist.length == 0 && 
      <View style={styles.container}>
        
        <Text>Your List is Empty !</Text>
      </View>
      }
  </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: {
  

    alignItems: 'center',
    justifyContent: 'center',
  },
});