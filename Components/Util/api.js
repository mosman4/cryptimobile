const coingeckoAll = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%20%2C%20ethereum%20%2C%20tether%20%2C%20ripple%20%2C%20cardano%20%2C%20dogecoin%20%2C%20solana%20%2C%20litecoin%20%2C%20tron%20%2C%20shiba-inu&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d&locale=en"
const cointgeckoTop = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=7&page=1&sparkline=true&price_change_percentage=1h%20%2C%2024h%20%2C%207d%20%2C%2014d%20%2C%2030d%20%2C%20200d%20%2C%201y&locale=en";
const FarhansApi = "https://e838-78-182-150-136.ngrok-free.app/api/v1/get_all_coin_data/format%3Djson/?format=json"
export async function fetchMetricsHandler (){ 
    let coinsObj = [];
    try{
        const response = await fetch(coingeckoAll);
        if(!response.ok){
            console.log("An Error Has Occured")
        }
        const data = await response.json();
        data.map(coinData => {
            coinsObj.push(
                {
                    id: coinData.id,
                    title: coinData.name,
                    currentPrice: coinData.current_price,
                    marketCapRank: coinData.market_cap_rank,
                    high_24h: coinData.high_24h,
                    low_24h: coinData.low_24h,
                    marketCap:coinData.market_cap_rank,
                    ath:coinData.ath,
                    sparkLine:coinData.sparkline_in_7d
                }
            ) 
        });
        
    } catch (error) {
        console.log("An Error Has Occured")
    }
     return coinsObj;
}


    

export async function fetchTopMetricsHandler (){ 
    let coinsObj = [];
    try{
        const response = await fetch(cointgeckoTop);
        if(!response.ok){
            console.log("An Error Has Occured")
        }
        const data = await response.json();
        data.map(coinData => {
            coinsObj.push(
                {
                    id: coinData.id,
                    title: coinData.name,
                    currentPrice: coinData.current_price,
                    marketCapRank: coinData.market_cap_rank,
                    high_24h: coinData.high_24h,
                    low_24h: coinData.low_24h,
                    marketCap:coinData.market_cap_rank,
                    ath:coinData.ath,
                    sparkLine:coinData.sparkline_in_7d,
                    changePercentage:coinData.price_change_percentage_24h

                }
            ) 
        });
        
    } catch (error) {
        console.log(error.message)
    }
    
     return coinsObj;
}

export async function fetchFarhansData (){ 
    let coinsObj = [];
    try{
        const response = await fetch(FarhansApi);
        if(!response.ok){
            console.log("An Error Has Occured")
        }
        const data = await response.json();
        data.map(coinData => {
            coinsObj.push(
                {
                    id: Math.random(),
                    title: coinData.title,
                    predictedPrices: coinData.predicted_prices,
                    predictedDate: coinData.prediction_date,
                    Mse: coinData.mse,
                    rMse: coinData.rmse      
                }
            ) 
        });
        
    } catch (error) {
        console.log(error.message)
    }
    console.log(coinsObj);
     return coinsObj;
}

