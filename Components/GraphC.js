import { View, Text} from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import { Rect, Text as TextSVG, Svg } from "react-native-svg";
const screenWidth = Dimensions.get("window").width;

export default function GraphC({price, timestamp,title, fromTop}) {
  let [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 })
    let backgroundColor, backgroundGradientFrom,backgroundGradientTo;
  
      backgroundColor= "#e26a00";
      backgroundGradientFrom = "#E67A0D";
      backgroundGradientTo="#E3760A";
    
    
    const data = {
        labels: timestamp,
        datasets: [
          {
            data: price,
            //color: (opacity = 1) => `rgba(246, 248, 252, ${opacity})`, // optional
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
    <View style={{marginVertical:1}} >
   
    <LineChart
        data={data}
        width= {screenWidth - 20}
        height={230}
        withVerticalLines={false}
        chartConfig={chartConfig}
        withDots={false}
        bezier
        style={{marginVertical: 8,borderRadius: 16}}
        yAxisInterval={3}
        decorator={() => {
          return tooltipPos.visible ? <View>
              <Svg>
                  <Rect x={tooltipPos.x - 15} 
                      y={tooltipPos.y + 10} 
                      width="40" 
                      height="30"
                      fill="black" />
                      <TextSVG
                          x={tooltipPos.x + 5}
                          y={tooltipPos.y + 30}
                          fill="white"
                          fontSize="16"
                          fontWeight="bold"
                          textAnchor="middle">
                          {tooltipPos.value}
                      </TextSVG>
              </Svg>
          </View> : null
      }}

      onDataPointClick={(data) => {

          let isSamePoint = (tooltipPos.x === data.x 
                              && tooltipPos.y === data.y)

          isSamePoint ? setTooltipPos((previousState) => {
              return { 
                        ...previousState,
                        value: data.value,
                        visible: !previousState.visible
                     }
          })
              : 
          setTooltipPos({ x: data.x, value: data.value, y: data.y, visible: true });
      }}
    />

     
   
      
    </View>
  )
}