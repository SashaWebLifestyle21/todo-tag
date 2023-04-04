import React, { Dispatch, SetStateAction } from 'react';
import { ITodo } from "../../../redux/reducers/ToDoSlice";
import Text from "../Text/Text";
import './TodoItem.scss'
import Button from "../Button/Button";

interface ITodoItem {
    todo: ITodo
    removeTodo: (id: string) => void
    setIsOpenModal: Dispatch<SetStateAction<boolean>>
    setCurrentTodo: Dispatch<SetStateAction<ITodo | null>>
}

const TodoItem = ({ todo, removeTodo, setIsOpenModal, setCurrentTodo }: ITodoItem) => {

    const handleUpdate = () => {
        setIsOpenModal(true)
        setCurrentTodo(todo)
    }

    return (
        <div className='todo-wrapper'>
            <div>
                <Text>{todo.text}</Text>
                <Text
                    className='todo-date'
                >
                    Создано: {`${todo.dateCreate.day}.${todo.dateCreate.month}.${todo.dateCreate.year}`}
                </Text>
            </div>
            <div className='todo-btn-wrapper'>
                <Button onClick={handleUpdate}>Редактировать</Button>
                <Button onClick={() => removeTodo(todo.id)}>Удалить</Button>
            </div>
        </div>
    );
};

export default React.memo(TodoItem);