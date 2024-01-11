//useState: 
//useState return array with 2 element one is current state/data another one is updated function.
//and take 1 argument also i.e initial value and initial value can be string, number, boolean, empty string, array & object.
//useState makes the functional component stateless to statefull.
//It creates state in functional component.
//Syntax: let[currentdata, setCurrentdata] = useState(initialvalue)

import { useState } from "react";

function App(){
  let [counter, setCounter] = useState(15);
  const counterIncrement = () => {
    setCounter(counter + 1);
    // console.log(`clicked counter ${counter}`);
  }

  const removeValue = () => {
    // setCounter(counter - 1)     //in this scenario it was able to reach -1,-2,-3...
    (counter > 0) ? setCounter(counter - 1) : 0; //Remove value can't reach -1,-2,-3... it will stop in 0.
  }
  return(
    <>
    <h2>Chai Aur React Count</h2>
    <p>Counter Value: {counter}</p>
    <button onClick={counterIncrement}>Add Value {counter}</button>
    <br></br>
    <br></br>
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}
export default App;