import { useEffect, useState } from "react";

function useCurrencyInfo (currency){
    const [Data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((resp) => resp.json())
        .then( (resp)=> {
            setData(resp.currency)// we can use resp[currency] as an substitution of resp.currency
        })
    }, [currency])
    console.log(Data)
    return Data
}

export default useCurrencyInfo