import {useState, useEffect} from 'react';

//Creating own custom hooks
function useCurrencyInfo(currency){
    const[data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => response.json())       //when data comes from API its data type is "string" but we need to covert this data type into "JSON". 
        .then((response) => setData(response[currency]))  //After converting data in above, here we are storing data inside "data" using "setData".here this "data" like a variable and "setData" is a function.
    }, [currency])
    console.log(data);
    return data;
}
export default useCurrencyInfo;