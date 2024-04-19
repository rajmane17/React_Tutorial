import { useState } from 'react'

function App() {

  // Initial color is green
  const [color, setColor] = useState("green")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '> 
      <div className='px-3 py-2 bg-slate-400 rounded-full flex gap-3'>
        <button className='px-5 py-2 rounded-full text-white' style={{backgroundColor: "red"}}
        onClick={() => {
          setColor("Red")
        }}
        >Red</button>
        <button className='px-5 py-2 rounded-full text-white' style={{backgroundColor: "Blue"}}
        onClick={() => {
          setColor("Blue")
        }}
        >Blue</button>
        <button className='px-5 py-2 rounded-full text-black' style={{backgroundColor: "yellow"}}
        onClick={() => {
          setColor("yellow")
        }}
        >yellow</button>
        <button className='px-5 py-2 rounded-full text-white' style={{backgroundColor: "purple"}}
        onClick={() => {
          setColor("purple")
        }}
        >purple</button>
        <button className='px-5 py-2 rounded-full text-black' style={{backgroundColor: "pink"}}
        onClick={() => {
          setColor("Pink")
        }}
        >pink</button>
      </div>

      </div>
    </div>
    </>
  )
}

export default App
