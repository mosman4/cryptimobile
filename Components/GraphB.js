import { View, Text} from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import { Rect, Text as TextSVG, Svg } from "react-native-svg";
const screenWidth = Dimensions.get("window").width;

export default function GraphB({price, timestamp,title, fromDetails, fromTop}) {
  let [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 })
    let backgroundColor, backgroundGradientFrom,backgroundGradientTo;
    if (fromDetails){
      backgroundColor= "#FFFFFF";
      backgroundGradientFrom = "#FFFFFF";
      backgroundGradientTo="#FFFFFF";
    } else if(fromTop){
      backgroundColor= "#e26a00";
      backgroundGradientFrom = "#E67A0D";
      backgroundGradientTo="#E3760A";
    } else {
      backgroundColor= "#15297c";
      backgroundGradientFrom = "#15297c";
      backgroundGradientTo="#3e519c";
    }
    
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
      decimalPlaces: 1, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(25, 25, 25, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(20, 25, 25, ${opacity})`,
      style: {
        borderRadius: 15
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#B36E19"
      }
      };
  return (
    <View style={{marginVertical:1}} >
    {!fromTop && <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:17}}>{title}</Text>}
    <Text style={{alignSelf:"center",fontSize:25,marginTop: 20,}}>Last 7 days Trend</Text>

    <LineChart
        data={data}
        width= {screenWidth - 20}
        height={230}
        withDots={false}
        withVerticalLines={false}
        chartConfig={chartConfig}
  
        bezier
        style={{marginVertical: 8,borderRadius: 10}}
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
    
    {fromTop && 
    
      <View style={{justifyContent:'space-around',alignItems: 'center',flexDirection:"row", paddingVertical:14,backgroundColor:"#FFFFFF", borderRadius:10,shadowColor:"black",shadowOffset:{width:0,height:0},shadowOpacity:0.04,shadowRadius:8}}>
      <View style={{alignItems: 'center',}}>
      <Text style={{fontWeight:"bold", fontSize:20}} >{title}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight:"bold", fontSize:19,color:"#30ca10"}} > Up {fromTop}%</Text>
        <Text style={{fontWeight:"300", fontSize:18,color:"#47C22E"}} >Next week</Text>
      </View>
      </View>
   
      }
    </View>
  )
}