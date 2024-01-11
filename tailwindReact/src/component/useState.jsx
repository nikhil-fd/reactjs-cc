import React, { useState } from "react";

function CounterComponent(){
    const[counter, setCounter] = useState(10);
    function incrementFunc(){
        setCounter(counter + 1);        //💥Output:11
        setCounter(counter + 1);         //💥Output:11
        setCounter(counter + 1);          //💥Output:11
        //Note: Here above counter value contains intitial value i.e. 10 then  10 + 1 = 11
        //      Here remaining 2 also counter value contains same initial value is 10 then 10 + 1 = 11

        setCounter((prevValue) => (prevValue + 1));    //💥Output:11
        setCounter(prevValue => prevValue + 1);         //💥Output:12
        setCounter(prevValue => prevValue + 1);          //💥Output:13
        //Note: Above setCounter() is an function i.e. updated function. So here inside that
        //      updated function we can use call back function and here we used arrow function as call back,
        //      And inside that callback function we passed a parameter and that parameter contains previous value,
        //      So here previous value is counter value and cunter value is initial value i.e. 10 then 10 + 1 = 11.
        //      In second line prevValue is 11 then 11 + 1 = 12.
        //      In third line prevValue is 12 then 12 + 1 = 13.
    }
    function decrementFunc(){
        setCounter((prevValue) => (prevValue - 1));
        setCounter((prevValue) => (prevValue - 1));
    }
    return(
        <>
            <h2>Counter Number Increment/Decrement</h2>
            <p>Counter Number : {counter}</p>
            <button onClick={incrementFunc}>Increase Value {counter}</button>
            <button onClick={decrementFunc}>Decrease Value{counter}</button>
        </>
    )
};
export default CounterComponent;