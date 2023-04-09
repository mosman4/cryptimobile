import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get("window").width;

export default function Graph({price, timestamp,title, fromDetails, fromTop}) {
    const navigatoin = useNavigation()
    let backgroundColor, backgroundGradientFrom,backgroundGradientTo;
    if (fromDetails){
      backgroundColor= "#FFFEFD";
      backgroundGradientFrom = "#1B4A29";
      backgroundGradientTo="#17301C";
    } else if(fromTop){
      backgroundColor= "#e26a00";
      backgroundGradientFrom = "#E67A0D";
      backgroundGradientTo="#E3760A";
    } else {
      backgroundColor= "#15297c";
      backgroundGradientFrom = "#15297c";
      backgroundGradientTo="#3e519c";
    }
    function pressHandler(){
        console.log("Pressed")
        navigatoin.navigate("Details")
    };
    
    const data = {
        labels: timestamp,
        datasets: [
          {
            data: price,
            color: (opacity = 1) => `rgba(246, 248, 252, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        //legend: ["Rainy Days"] // optional
      };
      const chartConfig = {
      backgroundColor: backgroundColor,
      backgroundGradientFrom: backgroundGradientFrom,
      backgroundGradientTo: backgroundGradientTo,
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#B36E19"
      }
      };
  return (
    <Pressable style={{marginVertical:1}} onPress={pressHandler }>
    {!fromTop && <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:17}}>{title}</Text>}
    <LineChart
        data={data}
        width= {screenWidth - 20}
        height={230}
        chartConfig={chartConfig}
        bezier
        style={{
        marginVertical: 8,
        borderRadius: 16,
        }}
    />
    {fromTop && 
    
      <View style={{justifyContent:'space-around',alignItems: 'center',flexDirection:"row", paddingVertical:14,backgroundColor:"#FFFFFF", borderRadius:14,shadowColor:"black",shadowOffset:{width:0,height:0},shadowOpacity:0.04,shadowRadius:8}}>
      <View style={{alignItems: 'center',}}>
      <Text style={{fontWeight:"bold", fontSize:20}} >{title}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight:"bold", fontSize:19,color:"#30ca10"}} > Up {fromTop}%</Text>
        <Text style={{fontWeight:"300", fontSize:18,color:"#47C22E"}} >Next week</Text>
      </View>
      </View>
   
      }
    </Pressable>
  )
}