import { createContext, useState,useRef } from "react";

export const DataContext = createContext({
    coins:[],
    TopCoins:[],
    MyList:[],
    coinsWithPrediction:[],
    addTopCoins:(coin) =>{},
    addCoins:(coin)=>{},
    addPredictions:(coin)=>{},
    addToMyList:(coins) => {},
    removeFromList:(coinName)=> {}

})

export default function DataContextProvider ({children}){
    const [coinsObj,setCoins] = useState([]);
    const [topCoins,setTopCoins] = useState([]);
    const [myList,setListItem] = useState([]);
    const [coinsWithPrediction,setCoinsPrediction] = useState([]);
    
    function coinsAdder (coin){
        setCoins(coin)
       
        }
    function topCoinsSetter(coins) {
        setTopCoins(coins)
    }

    function addToMyListSetter(coin){
        setListItem((currentInList) => [...currentInList, coin])
        //console.log(myList)

    }

    function addPredictionSetter(coins){

        setCoinsPrediction(coins)
    }

    function removeFromListHandler(coinTitle){ 
        setListItem((currentList) => currentList.filter((coin) => coin.title !== coinTitle))
    }
    const values = {
        coins:coinsObj,
        TopCoins:topCoins,
        MyList:myList,
        coinsWithPrediction:coinsWithPrediction,
        addTopCoins:topCoinsSetter,
        addCoins:coinsAdder,
        addToMyList:addToMyListSetter,
        removeFromList:removeFromListHandler,
        addPredictions:addPredictionSetter,
    }

    return(
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}