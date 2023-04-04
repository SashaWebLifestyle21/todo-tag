import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface ITodo {
    id: string
    text: string
    dateCreate: {
        day: number,
        month: number,
        year: number
    }
}

export interface IToDoState {
    todos: ITodo[]
}

const initialState: IToDoState = {
    todos: [],
}

export interface IUpdateAction {
    text: string
    id: string
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo(state, action: PayloadAction<ITodo>) {
            state.todos.push(action.payload)
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo(state, action: PayloadAction<IUpdateAction>) {
            const indexTodo = state.todos.findIndex(todo => todo.id === action.payload.id)
            if(indexTodo !== -1) {
                const updateTodos = state.todos.map((item, index) => {
                    if(index === indexTodo) {
                        return {...item, text: action.payload.text}
                    } else return item
                })
                state.todos = updateTodos
            }
        }
    }
})

export default todoSlice.reducer