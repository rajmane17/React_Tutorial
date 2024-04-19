import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj1 = {
    name: "rianna",
    age: 18,
    location: "vasai",
    score: [15, 12, 13]
  }

  let myObj2 = {
    name: "Anushka",
    age: 21,
    location: "Andheri",
    score: [15, 15, 14]
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 mb-4'>TailWind Test</h1>
    <Card  username= "Rianna" someObj = {myObj1} btnTxt="Click Me"/>
    <Card username= "Anushka" someObj = {myObj2} btnTxt="Visit Me"/>
    </>
  )
}

export default App
