import { useState } from 'react'
import './App.css'

function App() {

  const [display, setDisplay] = useState("")

  return (
    <div>
      <button onClick={() => {
        setDisplay("Hello_World")
      }}>Click me</button>
      <h2>{display}</h2>
    </div>
  )
}

export default App
