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
