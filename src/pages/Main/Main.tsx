import React, {useState} from 'react';
import './Main.scss'
import Title from "../../components/common-components/Title/Title";
import Input from "../../components/common-components/Input/Input";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {ITodo, todoSlice} from "../../redux/reducers/ToDoSlice";
import Button from "../../components/common-components/Button/Button";
import TodoItem from "../../components/common-components/TodoItem/TodoItem";
import Modal from "../../components/common-components/Modal/Modal";

const Main = () => {

    const dispatch = useAppDispatch()
    const { createTodo, removeTodo, updateTodo } = todoSlice.actions
    const { todos } = useAppSelector(state => state.todoReducer)

    const [todoText, setTodoText] = useState('')
    const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleCreateTodo = () => {
        const newTodo = {
            id: Date.now().toString(),
            dateCreate: {
                day: new Date().getDay() + 2,
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear()
            },
            text: todoText
        }
        dispatch(createTodo(newTodo))
    }

    const handleRemoveTodo = (id: string) =>  {
        dispatch(removeTodo(id))
    }

    const handleUpdateTodo = () =>  {
        if(currentTodo) {
            dispatch(updateTodo(currentTodo))
        }
        setIsOpenModal(false)
    }

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        setTodoText(e.currentTarget.value)
    }

    const handleInputUpdate = (e: React.FormEvent<HTMLInputElement>) => {
        if(currentTodo) {
            setCurrentTodo({...currentTodo, text: e.currentTarget.value})
        }
    }

    return (
        <div className='main-container _container'>
            <Title>To Do App</Title>
            <div className='main-block'>
                <Input
                    type={'text'}
                    placeholder='Введите текст'
                    value={todoText}
                    onChange={handleInput}
                />
                <Button onClick={handleCreateTodo}>Создать</Button>
            </div>
            <div className='main-todolist__wrapper'>
                {todos.length === 0 && <Title>Нет заметок</Title>}
                {todos && todos.map(todo => {
                    return <TodoItem
                        key={todo.id + todo.text}
                        todo={todo}
                        removeTodo={handleRemoveTodo}
                        setIsOpenModal={setIsOpenModal}
                        setCurrentTodo={setCurrentTodo}
                    />
                })}
            </div>
            <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
                <Title>Обновить заметку</Title>
                <Input
                    type={'text'}
                    value={currentTodo?.text}
                    onChange={handleInputUpdate}
                />
                <Button
                    className='main-modal__btn'
                    onClick={handleUpdateTodo}
                >
                    Обновить
                </Button>
            </Modal>
        </div>
    );
};

export default Main;