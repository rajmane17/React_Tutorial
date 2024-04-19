import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {addTodo, removeTodo, updateTodo, toggleComplete} from "../features/todo/todoSlice"


function Addtodo() { 

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler= (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <div>
      
    </div>
  )
}

export default Addtodo
