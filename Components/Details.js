import { ScrollView,View, Text, StyleSheet } from 'react-native'
import React, {useContext, useState} from 'react'
import Graph from './Graph'
import Chart from './Chart'
import Bar from './Bar'
import data from '../Data.json'
import { ButtonGroup } from '@rneui/themed';
import { DataContext } from './Util/context-store'
import SmallCard from './UI/SmallCard'
import GraphB from './GraphB'

export default function Details({route}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dataCxt = useContext(DataContext)
  const coinTitle = route.params?.coinTitle
  const coins = data.coins
  const pressedCoin = coins.find((p) => p.title == "Bitcoin")
  const pressedCoin2 = dataCxt.coins.find((p) => p.title == coinTitle)

  
  const Window =  <View style={styles.windowShadow}>
            <ButtonGroup
            buttons={["1D", "1W","1M"]}
            selectedIndex={selectedIndex}
            onPress={(value) => {
              setSelectedIndex(value);
            }}
            containerStyle={{borderRadius:9}}
            selectedButtonStyle={{backgroundColor:"black"}}
            />
             </View>;
      console.log(selectedIndex)
  
  //TIMESTAMP IS USED INSTEAD OF PRICE HERE TEMPORARY
  let timeWindow = pressedCoin.timestamp.day;
  let priceWindow = pressedCoin.price.day;
  if(selectedIndex == 0){
    timeWindow = pressedCoin.timestamp.day;
    priceWindow = pressedCoin.timestamp.day;
  }else if (selectedIndex == 1){
    timeWindow = pressedCoin.timestamp.week;
    priceWindow = pressedCoin.timestamp.week;
  }else{
    timeWindow = pressedCoin.timestamp.month;
    priceWindow = pressedCoin.timestamp.month;
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1,padding:10}}>
      <View style={{ justifyContent:'center'}}>
      <View style={{ justifyContent:'center',alignItems:"center"}}>
      <Text style={{fontWeight:"bold", fontSize:24}} >Current Price: ${pressedCoin2.currentPrice}</Text>
      <Text style={{fontWeight:"600", fontSize:18, color:"#093F1E"}} >{pressedCoin.title}</Text>
      </View>
      <View style={{justifyContent:'space-evenly',alignItems: 'center',flexDirection:"row", paddingVertical:15,marginVertical:14,backgroundColor:"#FFFFFF", borderRadius:14,padding:10,shadowColor:"black",shadowOffset:{width:0,height:0},shadowOpacity:0.04,shadowRadius:8}}>
      <View style={{alignItems: 'center',}}>
      <Text style={{fontWeight:"400", fontSize:20,color:"#47C22E"}} >24h highest:</Text>
      <Text style={{fontWeight:"600", fontSize:18,color:"#30ca10"}} > ${pressedCoin2.high_24h}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
      <Text style={{fontWeight:"400", fontSize:20,color:"#C22E35"}} >24h lowest:</Text>
      <Text style={{fontWeight:"600", fontSize:18,color:"#CA1010"}} > ${pressedCoin2.low_24h}</Text>
      </View>
      </View>
      </View>
      <Text style={{alignSelf:"center",fontSize:25,marginTop: 20,}}>Performance graph</Text>
      {Window}
     <Graph  price={priceWindow} timestamp={timeWindow} fromDetails/>

     <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
      <SmallCard>
        <Text style={{fontWeight:"400", fontSize:18,marginVertical:10}} >Market Cap Rank</Text>
        <Text style={{fontWeight:"400", fontSize:20, textAlign:"center"}} ># {pressedCoin2.marketCap}</Text>
      </SmallCard>
      <SmallCard>
        <Text style={{fontWeight:"400", fontSize:20,marginVertical:10}} >All Time High</Text>
        <Text style={{fontWeight:"400", fontSize:20, textAlign:"center"}} >$ {pressedCoin2.ath}</Text>
      </SmallCard>     
     </View>
     
     <GraphB  price={pressedCoin2.sparkLine.price} timestamp={[-7,-6,-5,-4,-3,-2,-1]} fromDetails/>
{/* 
     <Chart marketShare={marketshare} coinName={pressedCoin2.title}/>
     <Text style={{alignSelf:"center",fontSize:25,marginTop: 20,}}>Last 6 months trend</Text>
     <Bar trends={pressedCoin.recentMonthsTrends} names={dataCxt.coinsNames} ranks={dataCxt.marketCaps}/> */}
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  sizeShadow:{
    shadowColor: '#black',
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.22,
    marginVertical:4,
    marginRight:10
  },
})