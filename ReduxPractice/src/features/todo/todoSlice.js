import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos: [
        {
            id:1,
            Display:"Hello World",
            completed:false
        }
    ]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid,
                Display: action.payload.Display,
                completed:false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=>{
                todo.id !== action.payload.id
            })
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo)=> {
                todo.id == action.payload ? todo.Display = action.payload.Display : todo.Display
            })
        },
        toggleComplete: (state, action) => {
            state.todos = state.todos.map((todo) => {
                todo.id = action.payload ?  !action.payload.completed : todo.completed
            })
        }
    }
})

export const {addTodo, removeTodo, updateTodo, toggleComplete} = todoSlice.actions

// we are awarinng the store of all this reducers if this is not done then the store cant be maintained 
export default todoSlice.reducer