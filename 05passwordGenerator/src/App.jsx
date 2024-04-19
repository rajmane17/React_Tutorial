import { useState, useCallback } from 'react'

function App() {

  const [lenghth, setlength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setpassword] = useState("");

  const PasswordGenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxz";

    if(numAllowed){
      str += "0123456789"
    };
    // same as above just syntax is diffrenet
    if(charAllowed) str += "<:?{}()_->?";

    for (let i = 1; i < length; i++) {
      let char = Math.floor( Math.random()*str.length + 1 )
      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [lenghth, numAllowed, charAllowed, setpassword])



  return ( 
    <>
    <div className=' w-full max-w-md shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 mx-5'>
      <h1 className='text-white text-center text-2xl'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden p-4'>
        <input type="text" 
        value={Password}
        className='Outline-none w-full py-1 px-3 rounded-lg'
        placeholder='password'
        readOnly
        />
        <button>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="radio" 
        min={6} 
        max={100}
        value={lenghth}
        className='curser-pointer'
        onChange={(e)=> {
          setlength(e.target.value)
        }} 
        />
        <label>Lenght : {lenghth}</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
