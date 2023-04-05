import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITag} from "./tagSlice";
import {getLocalStorage} from "../../utils/getLocalStorage";
import {keyTagList, keyTodoList} from "../../constants/keyLocalStorage";


export interface ITodo {
    id: string
    text: string
    dateCreate: {
        day: number,
        month: number,
        year: number
    }
    tags: string
}

export interface IToDoState {
    todos: ITodo[]
}

const initialState: IToDoState = {
    todos: getLocalStorage(keyTodoList) || [],
}

export interface IUpdateAction {
    text: string
    id: string
    tags: string
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo(state, action: PayloadAction<ITodo>) {
            state.todos.push(action.payload)
            localStorage.setItem(keyTodoList, JSON.stringify(state.todos))
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            localStorage.setItem(keyTodoList, JSON.stringify(state.todos))
        },
        updateTodo(state, action: PayloadAction<IUpdateAction>) {
            const indexTodo = state.todos.findIndex(todo => todo.id === action.payload.id)
            if(indexTodo !== -1) {
                const updateTodos = state.todos.map((item, index) => {
                    if(index === indexTodo) {
                        return {...item, text: action.payload.text, tags: action.payload.tags}
                    } else return item
                })
                state.todos = updateTodos
                localStorage.setItem(keyTodoList, JSON.stringify(state.todos))
            }
        }
    }
})

export default todoSlice.reducer