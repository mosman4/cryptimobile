import { ScrollView,View, Text, StyleSheet } from 'react-native'
import React, {useContext, useState} from 'react'
import Graph from './Graph'
import { ButtonGroup } from '@rneui/themed';
import { DataContext } from './Util/context-store'
import SmallCard from './UI/SmallCard'
import GraphB from './GraphB'

export default function Details({route}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dataCxt = useContext(DataContext)
  const coinTitle = route.params?.coinTitle
  const pressedCoin = dataCxt.MyList.find((p) => p.title == coinTitle)
  
  const predictedData = pressedCoin.firstWeekPrediction 
  const realData = pressedCoin.sparkLine.price.slice(0,7)
  function calculateRMSE(predictedData, realData) {
    // Check if the lengths of the arrays match
    if (predictedData.length !== realData.length) {
      throw new Error('The lengths of the predictedData and realData arrays must be the same.');
    }
  
    // Calculate the squared differences
    const squaredDifferences = predictedData.map((predicted, index) => {
      const real = realData[index];
      const difference = real - predicted;
      return difference * difference;
    });
  
    // Calculate the mean of the squared differences
    const meanSquaredDifference = squaredDifferences.reduce((acc, val) => acc + val, 0) / squaredDifferences.length;
  
    // Calculate the root of the mean squared difference
    const rmse = Math.sqrt(meanSquaredDifference);
  
    return rmse;
  }

  const rmseValue = calculateRMSE(predictedData,realData);
  
  
  const Window =  <View style={styles.windowShadow}>
            <ButtonGroup
            buttons={["1st Week", "2nd Week","3rd Week","4th Week"]}
            selectedIndex={selectedIndex}
            onPress={(value) => {
              setSelectedIndex(value);
            }}
            containerStyle={{borderRadius:9}}
            selectedButtonStyle={{backgroundColor:"black"}}
            />
             </View>;


      // Finding the next 30 days
      const dateObj = [];
      var dateFound = new Date(pressedCoin.predictedDate);
      var year = dateFound.getFullYear();
      var month = dateFound.getMonth();
      var date = dateFound.getDate();
      for(var i=0; i<30; i++){
          var day=new Date(year, month, date  + i);
          dateObj.push(day.getDate())
          console.log(dateObj);     
      }

    

  
  
  let timeWindow = dateObj.slice(0,7);
  let priceWindow = pressedCoin.firstWeekPrediction;
  if(selectedIndex == 0){
    timeWindow = dateObj.slice(0,7);
    priceWindow = pressedCoin.firstWeekPrediction;
  }else if (selectedIndex == 1){
    timeWindow = dateObj.slice(7,14);
    priceWindow = pressedCoin.secondWeekPrediction;
  }else if (selectedIndex == 2){
    timeWindow = dateObj.slice(14,21);
    priceWindow = pressedCoin.thirdWeekPrediction;
  }else{
    timeWindow = dateObj.slice(21);
    priceWindow = pressedCoin.forthWeekPrediction;
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1,padding:10}}>
      <View style={{ justifyContent:'center'}}>
      <View style={{ justifyContent:'center',alignItems:"center"}}>
      <Text style={{fontWeight:"bold", fontSize:24}} >Current Price: ${pressedCoin.currentPrice}</Text>
      <Text style={{fontWeight:"600", fontSize:18, color:"#093F1E"}} >{pressedCoin.title}</Text>
      </View>
      <View style={{justifyContent:'space-evenly',alignItems: 'center',flexDirection:"row", paddingVertical:15,marginVertical:14,backgroundColor:"#FFFFFF", borderRadius:14,padding:10,shadowColor:"black",shadowOffset:{width:0,height:0},shadowOpacity:0.04,shadowRadius:8}}>
      <View style={{alignItems: 'center',}}>
      <Text style={{fontWeight:"400", fontSize:20,color:"#47C22E"}} >24h highest:</Text>
      <Text style={{fontWeight:"600", fontSize:18,color:"#30ca10"}} > ${pressedCoin.high_24h}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
      <Text style={{fontWeight:"400", fontSize:20,color:"#C22E35"}} >24h lowest:</Text>
      <Text style={{fontWeight:"600", fontSize:18,color:"#CA1010"}} > ${pressedCoin.low_24h}</Text>
      </View>
      </View>
      </View>
      <Text style={{alignSelf:"center",fontSize:25,marginTop: 20,}}>Next Month Predictions:</Text>
      {Window}
     <Graph  price={priceWindow} timestamp={timeWindow} fromDetails/>


    <View>
     <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
      <SmallCard>
        <Text style={{fontWeight:"400", fontSize:18,marginVertical:10}} >Market Cap Rank</Text>
        <Text style={{fontWeight:"400", fontSize:20, textAlign:"center"}} ># {pressedCoin.marketCap}</Text>
      </SmallCard>
      <SmallCard>
        <Text style={{fontWeight:"400", fontSize:20,marginVertical:10}} >All Time High</Text>
        <Text style={{fontWeight:"400", fontSize:20, textAlign:"center"}} >$ {pressedCoin.ath}</Text>
      </SmallCard>     
     </View>
     <View style={{flexDirection:"row",justifyContent:"space-evenly",marginVertical:20}}>
      
        <Text style={{fontWeight:"bold", fontSize:20,textAlign:"center"}} >1st Week RMSE:</Text>
        <Text style={{fontWeight:"400", fontSize:20, textAlign:"center"}} > {Number(rmseValue).toFixed(4)}</Text>
     
     </View>
     </View>
     
     <GraphB  price={pressedCoin.sparkLine.price} timestamp={[-7,-6,-5,-4,-3,-2,-1]} fromDetails/>
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