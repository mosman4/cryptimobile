import { createContext, useState,useRef } from "react";

export const DataContext = createContext({
    coins:[],
    TopCoins:[],
    MyList:[],
    addTopCoins:(coin) =>{},
    addCoins:(coin)=>{},
    addPrediction:(coin)=>{},
    addToMyList:(coins) => {},
    removeFromList:(coinName)=> {}

})

export default function DataContextProvider ({children}){
    const [coinsObj,setCoins] = useState([]);
    const [topCoins,setTopCoins] = useState([]);
    const [myList,setListItem] = useState([]);
    
    function coinsAdder (coin){
        setCoins(coin)
       
        }
    function topCoinsSetter(coins) {
        setTopCoins(coins)
    }

    function addToMyListSetter(coins){
        setListItem((currentInList) => [...currentInList, coins])
        
    }

    function removeFromListHandler(coinTitle){
        setListItem((currentList) => currentList.filter((coin) => coin.title !== coinTitle))
    }
    const values = {
        coins:coinsObj,
        TopCoins:topCoins,
        MyList:myList,
        addTopCoins:topCoinsSetter,
        addCoins:coinsAdder,
        addToMyList:addToMyListSetter,
        removeFromList:removeFromListHandler
    }

    return(
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}