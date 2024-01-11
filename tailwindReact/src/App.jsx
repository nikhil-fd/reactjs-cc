import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardComponent from './component/card'
import CounterComponent from './component/useState'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {username: "nikhil", age: 30};
  let myArr = [20, 30, 40]

  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-lg'>Tailwind css in React</h1>
      <CounterComponent/>
    </>
  )
}

export default App
