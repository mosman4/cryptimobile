import { View, Text } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
export default function Bar() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [186, 184, 187, 187, 186, 187]
          }
        ]
      };
    const chartConfig = {
        backgroundColor: "#EFF3FA",
        backgroundGradientFrom: "#FDFDFE",
        backgroundGradientTo: "#FFFFFF",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#B36E19"
        }
        };
  return (
    <BarChart
       
        data={data}
        width={screenWidth - 30}
        height={250}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        style={{
            marginVertical: 10,
            borderRadius: 16,
            backgroundColor:"#FFFFFF",
            shadowColor:"black",
            shadowOffset:{width:0,height:0},
            shadowOpacity:0.04,
            shadowRadius:8,
    
            }}
/>
  )
}