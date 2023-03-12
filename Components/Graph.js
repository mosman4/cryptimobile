import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get("window").width;

export default function Graph({price, timestamp,title, fromDetails}) {
    const navigatoin = useNavigation()

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
      backgroundColor: fromDetails? "#FFFEFD":"#15297c",
      backgroundGradientFrom: fromDetails? "#1B4A29":"#15297c",
      backgroundGradientTo: fromDetails? "#17301C":"#3e519c",
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
    <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:17}}>{title}</Text>
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
    </Pressable>
  )
}