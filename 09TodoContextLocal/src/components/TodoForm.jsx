import React, { useCallback, useState } from 'react'
import { useTodo } from '../context.js/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo()

    

  return (
    <>
    //
    
    </>
  )
}

export default TodoForm
