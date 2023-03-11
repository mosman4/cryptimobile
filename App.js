import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import MyList from './Screens/MyList';
import Search from './Screens/Search';
import BestPerformers from "./Screens/BestPerformers";
import Edit from "./Screens/Edit";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
function Tabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name={"MyList"} component={MyList} options={{title: "Home",headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="home-outline" size={size} color={color} />),}}/>
      <Tab.Screen name={"Search"} component={Search} options={{title: "Search",headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="search-outline" size={size} color={color} />),}}/>
      <Tab.Screen name={"BestPerformers"} component={BestPerformers}  options={{title: "Top",headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="analytics-outline" size={size} color={color} />),}}/>
      <Tab.Screen name={"Edit"} component={Edit}options={{title: "Edit",headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="settings" size={size} color={color} />),}}/>
    </Tab.Navigator>
  )
}
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={"Main"} component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


