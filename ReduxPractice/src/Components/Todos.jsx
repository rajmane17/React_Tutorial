import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeTodo} from "../features/todo/todoSlice"

// we are going to display all the todos from this component
function Todos() {

    const todos = useSelector((state) => {state.todos})
    const dispatch = useDispatch()
  return (
    <>
    <div>
        Todos
    </div>
    {todos.map((todo)=>(
        <li key={todo.id}>
            {todo.Display}
            {/* Here we cant directly call dispatch bcz we dont call anything inside onClick we just give reference,
            so we fire a call back here */}
            <button onClick={()=> dispatch(removeTodo(todo.id))}>X</button>
        </li>
    ))}

    </>
  )
}

export default Todos
