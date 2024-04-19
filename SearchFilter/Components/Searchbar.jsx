import { useState } from 'react'
import {FaSearch} from "react-icons/fa"

function Searchbar( {setResult }) {

    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typico.com/users")
        .then((resp) => {resp.json()})
        .then((datas) => {
            const result = datas.filter((data) => {
                return (
                    value && data && data.name.toLowerCase().includes(value)
                );
            });
            setResult(result);
        })
    }

    function handleChange(value) {
        setInput(value)
        fetchData(value)
    }

    
  return (
    <div>
      <FaSearch id='search-icon'/>
      <input type='text' placeholder='search here' value={input} onChange={(e) => {handleChange(e.target.value)}} />
    </div>
  )
}

export default Searchbar
