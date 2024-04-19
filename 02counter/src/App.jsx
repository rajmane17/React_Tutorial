import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setcounter] = useState(5);

  const addvalue = () => {
    // counter = counter + 1;
    setcounter(counter + 1);
    console.log("value added", counter);
  }

  const removeValue = ()=> {
    setcounter(counter - 1);
    console.log("value added", counter);
  }

  return (
    <>
    <h1>Hii, welcome to learn react</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addvalue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
