import { View, Text } from 'react-native'
import React from 'react'
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
export default function Chart({marketShare,coinName}) {
  const data = {
    labels: [coinName, ], // optional
    data: [ marketShare],
    legend: ["Rainy Days"] // optional
  };
  const chartConfig = {
    backgroundColor: "#EFF3FA",
    backgroundGradientFrom: "#FDFDFE",
    backgroundGradientTo: "#FFFFFF",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 3, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(4, 0, 0, ${opacity})`,
    
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#B36E19"
    }
    };
  return (
    <>
    <Text style={{alignSelf:"center",fontSize:25,marginTop: 20,}}>Market Share Comparison</Text>
    <ProgressChart
       data={data}
       width={screenWidth - 20}
       height={220}
       strokeWidth={16}
       radius={62}
       chartConfig={chartConfig}
       hideLegend={false}
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
</>
  )
}