
import './App.css'
import Searchbar from '../Components/Searchbar'
import SearchResult from '../Components/SearchResult'
import { useState } from 'react'

function App() {

  const [result, setResult] = useState([])

  return (
    <>
    <div className='App'>
      <div className='Search-Bar-Container'>
        <Searchbar setResult={setResult}/>
        <SearchResult result={result}/>
      </div>
    </div>
    </>
  )
}

export default App
