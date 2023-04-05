import {toast} from "react-toastify";
import {ITodo} from "../redux/reducers/ToDoSlice";

export const validateTodo = (todoStr: string, todos: ITodo[]) =>  {
    if(todos.find(todo => todo.text === todoStr)) {
        toast('Такая заметка уже существует')
        return false
    }
    if(/^\s*$/.test(todoStr)) {
        toast('Строка не может быть пустой')
        return false
    }
    return true
}