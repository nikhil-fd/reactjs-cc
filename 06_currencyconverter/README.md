```text
STEP1️⃣ 👉Fetch API Data 👉 File -- "useCurrencyinfo.js"

```

```javascript

import {useState, useEffect} from 'react';

//Creating own custom hooks
function useCurrencyInfo(currency){
    const[data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => response.json())       //when data comes from API its data type is "string" but we need to covert this data type into "JSON". 
        .then((response) => setData(response[currency]))  //After converting data in above, here we are storing data inside "data" using "setData".here this "data" like a variable and "setData" is a function.
    }, [currency]);
    console.log(data);
    return data;
}
export default useCurrencyInfo;

```

```text
STEP2️⃣ 👉Create a component as input From Box  👉File:"inputbox.js"


```

```javascript
import React, {useId} from "react";
function InputBox(
    {label, 
        amount, 
        onAmountChange, 
        onCurrencyChange, 
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisable = false,
        currencyDisable = false, 
        className="",}) {

       const amountInputId = useId()     

    return(
        <>
            <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
                <div className="w-1/2">
                {/* From */}
                    <label
                    htmlFor={amountInputId} 
                    className="text-black/40 mb-2 inline-block">
                    {label}
                    </label>

                    <input 
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}  //e.target.value return numbers in string format so we converted into number format using Number().
                    ></input>
                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right">
                    <p className="text-black/40 mb-2 w-full">Currency Type</p>
                    <select 
                        className="rounded-lg px-1 py-1 bg-gray-100 
                        cursor-pointer outline-none"
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}>

                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}
export default InputBox;

//NOTE: useId() hooks it creates a unique id. here we use like, in html we used to bind 
//      label tag with input tag by using "for" in label and "id" in input. here it does same. 

```

```text
STEP3️⃣ 👉Here we export "n" number of component for better performance file:"index.js"

```

```javascript
import InputBox from "./inputbox";

export {InputBox}

```

```text
STEP4️⃣ 👉Here we are reusing component which component created in STEP 2 File: "App.js"

```

```javascript
import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  //swap function here
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  //convert function here
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center
      bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="w-full">
          <div
            className="w-full max-w-md mx-auto border border-gray-50 rounded-lg
        p-5 backdrop-blur-sm bg-white/30"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault(); //jetebele form submit huyeh seita jayeh jekounshi address ku or url ku but atahare amey kounoshi address ku or url ku pathaunu so we used "preventDefault()".
                convert(); //here we calling convert() function.which is converting amount
              }}
            >

              {/* From Input Box */}
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setAmount(amount)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              {/* swap Button */}
              <div className="absolute w-full h-0.5">
                <button
                  type="button"
                  className="relative left-52 -translate-x-1/2 -translate-y-1/2 border-2
          border-white rounded-md bg-blue-600 text-white px-2 py-0.5 "
                  onClick={swap}
                >
                  swap
                </button>
              </div>

              {/* To input Box */}
              <div className="w-full mt-1 mb-1">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>

              {/* Convert Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

```

```text
STEP5️⃣ 👉Here Rendering our App  👉File: "/src/index.js

```
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


```

