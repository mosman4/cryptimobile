import { Alert, Pressable, SafeAreaView, StyleSheet} from 'react-native';
import React, { useContext, useEffect} from 'react'
import Graph from '../Components/Graph';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { fetchFarhansData } from '../Components/Util/api';
import { DataContext } from '../Components/Util/context-store';

export default function MyList() {
  const navigatoin = useNavigation();
  const dataCxt = useContext(DataContext)
  const isEmpty = dataCxt.MyList

  useEffect(()=> { 
    async function getCoins(){
      try{
        const fetchedCoins = await fetchFarhansData();
        
        dataCxt.addPredictions(fetchedCoins)
        //setLoading(false) 
      }catch(error){
        alert(error)
        //setLoading(false)
        console.log(error)
      }
    }
    getCoins()
    },[fetchFarhansData])

    function renderFunction(itemData){
      const item = itemData.item
      function pressHandler(){
        console.log("Pressed")
        navigatoin.navigate("Details",{coinTitle: item.title})
      };
      // 

      return(
        <SafeAreaView>

          <Pressable onPress={pressHandler}>
          <Graph title={item.title} price={item.firstWeekPrediction} timestamp={[1,2,3,4,5,6,7]}/>
          </Pressable>
              
         </SafeAreaView>
      )
    }
  return (
    <>
    { isEmpty && 
      <FlatList keyExtractor={(item) => item.title} data={dataCxt.MyList} renderItem={renderFunction} showsVerticalScrollIndicator={false}  contentContainerStyle = {{flexGrow: 1, justifyContent: 'center',padding:10,paddingVertical:10}} />
    }
    { isEmpty.length == 0 && 
      Alert.alert("List Is Empty", "Please Add Coins From Search Tap",[{text:"Select Coins",onPress:()=> navigatoin.navigate("Search")}])
      
    }
    </>
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



  //  useEffect(()=> { 
  //   async function getCoins(){
  //     try{
  //       const fetchedCoins = await fetchMetricsHandler();
  //       dataCxt.addCoins(fetchedCoins)
  //       //setLoading(false)
        
        
  //     }catch(error){
  //       alert(error)
  //       //setLoading(false)
  //       console.log(error)
  //     }
  //   }
  //   getCoins()
  //   },[fetchMetricsHandler])