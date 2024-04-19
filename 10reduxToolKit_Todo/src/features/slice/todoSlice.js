import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos : [{id:1, display: "Hello world"}]
}

export const TodoSlice = createSlice({
    name: "todo",
    // here we are declaring the initial state 
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid,
                display: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter( (todo)=> {
                 todo.id !== action.payload
            })
        }
    }
})

export const {addTodo, removeTodo} = TodoSlice.actions 
export default TodoSlice.reducer