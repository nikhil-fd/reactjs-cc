import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const[length, setLength] = useState(8);
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState("");

  //useRef() hooks
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {  //useCallback() optimizing the code it keeps the function/code in browser cache memory.
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*{}[]_=-";
    for(let i = 1; i <= length; i++){
      let char = Math.floor((Math.random() * str.length + 1));
      pass += str.charAt(char); //💥"+=" means it concatenate with "pass" value + "str.charAt(char)" = pass+str.charAt(char) 
    }                           //💥only "=" means single character will be updated.
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); //useCallback() Here it is optimizing the method, method like "charAllowed, length, numberAllowed, setPassword".


  useEffect(() => {        //useEffect() here jodi kichi bhi code ched chaad heichi taku dubara run karidio.
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()                   //"?" means optionally it is selecting like 0 0r 1(current value could be "null" or "any value") as per our html notes. here selection is visible to us.
    // passwordRef.current?.setSelectionRange(0, 10);  //setSelectionRange(0, 10) it selects total 10 character from 0 position.
    window.navigator.clipboard.writeText(password)      //here also copying the password but copy selection is not visible to us. 
  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3 my-4 rounded-md'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          ></input>

          <button 
          onClick={copyPasswordToClipboard} 
          className='outline-none bg-blue-700 text-white px-2 py-1 h-8 mt-4 shrink-0 rounded-md'>COPY</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            id='rangeVal'
            onChange={(e) => {setLength(e.target.value)}}
            ></input>
            <label htmlFor="rangeVal">Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={(e) => {setNumberAllowed((prev) => 
              !prev); //here prev is false and !prev means ! converts false to true & true to false
            }}
            ></input>
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked={charAllowed}
            id='numberInput'
            onChange={(e) => {setCharAllowed((prev) => 
              !prev);  //here prev is false and !prev means ! converts false to true & true to false
            }}
            ></input>
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </> 
  );
}

export default App;

//👉NOTE: useCallback() code we can directly use in useEffect() hooks and it will also work.
//      But here we were put function inside useCallback() for better optimization, like code will be in better optimization state. 

// useCallback() --Here we are optimizing the methods.Optimizing means it stores the method in cache memory.
//                 useCallback() function ku memrorize karta hey.

// useState() -- when any element/field updateing/changing with new value frequently at that time we can use useState().

// useEffect() -- if any method's is getting changing anything then it will run these method again.
//                jodi kichi method re kichi bhi value change heichi then taku aou thare run kariba painne hele put karo
//                sei method ku useEffect() dependecies bhitorey.
//              **useEffect() bhitorey jaha bhi dependecy achi seita 1st page load hela bele run heijayeh.

// Optimize: optimize means jou junisho ta or jou value ta bar bar change heuchi taku optimize kariba painee podey for better performance.
//           In react this optimization can define by a hook i.e. called useCallback().

// useRef() -- Using useRef() we can take the reference of any element and then we can manipulate to that reference.

