import { useState, useEffect } from 'react'
import './App.css'

function App() {


  const [todos, setTodos] = useState([]);


  useEffect(()=> {
    const todo = JSON.parse(localStorage.getItem("todos"))

    // checking if anything is there in the list or not
    if (todo && todo.length > 0){
      setTodos(todo)
    }

  }, [])

  useEffect(()=> {
  localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
    </>
  )
}

export default App
