import {useContext, createContext} from "react"

export const TodoContext = createContext({
    todo: [ 
        {
            Id :1,
            todo: "Todo msg",
            completed: false
        },
    ],

    addTodo : (todo) => {},
    removeTodo: (Id) => {},
    editTodo: (todo, Id) => {},
    markDone: (Id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider =  TodoContext.Provider