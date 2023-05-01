import { StyleSheet,SafeAreaView, FlatList,View,Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { fetchTopMetricsHandler } from '../Components/Util/api';
import { DataContext } from '../Components/Util/context-store';
import GraphC from '../Components/GraphC';

export default function BestPerformers() {
  const dataCxt = useContext(DataContext)

  useEffect(()=> { 
    async function getCoins(){
      try{
        const SetTopCoins = await fetchTopMetricsHandler();
        dataCxt.addTopCoins(SetTopCoins)
        //setLoading(false)
        console.log(SetTopCoins)
      }catch(error){
        alert(error)
        //setLoading(false)
        console.log(error)
      }
    }
    getCoins()
    },[fetchTopMetricsHandler])
    
  function renderFunction(itemData) {
    const item = itemData.item;
    return(
      <SafeAreaView>
          <GraphC price={item.sparkLine.price} timestamp={[-7,-6,-5,-4,-3,-2,-1]} />
          <View style={{justifyContent:'space-around',alignItems: 'center',flexDirection:"row", paddingVertical:14,backgroundColor:"#FFFFFF", borderRadius:14,shadowColor:"black",shadowOffset:{width:0,height:0},shadowOpacity:0.04,shadowRadius:8}}>
          <View style={{alignItems: 'center',}}>
            <Text style={{fontWeight:"bold", fontSize:20}} >{item.title}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
              <Text style={{fontWeight:"bold", fontSize:19,color:"#203437"}} >  {item.changePercentage}%</Text>
              <Text style={{fontWeight:"300", fontSize:18,color:"#203437"}} >24h change percentage</Text>
          </View>
          </View>
      </SafeAreaView>
       
    )
  }
  return (
      <FlatList keyExtractor={(item) => item.id} data={dataCxt.TopCoins} renderItem={renderFunction} showsVerticalScrollIndicator={false}  contentContainerStyle = {{flexGrow: 1, justifyContent: 'center',padding:10,paddingVertical:10}}/>
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