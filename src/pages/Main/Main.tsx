import React, {useState} from 'react';
import './Main.scss'
import Title from "../../components/common-components/Title/Title";
import Input from "../../components/common-components/Input/Input";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {ITodo, todoSlice} from "../../redux/reducers/ToDoSlice";
import Button from "../../components/common-components/Button/Button";
import TodoItem from "../../components/common-components/TodoItem/TodoItem";
import Modal from "../../components/common-components/Modal/Modal";
import UpdateTodo from "../../components/UpdateTodo/UpdateTodo";
import CreateTag from "../../components/CreateTag/CreateTag";
import TagItem from "../../components/common-components/TagItem/TagItem";

const Main = () => {

    const dispatch = useAppDispatch()
    const { createTodo, removeTodo, updateTodo } = todoSlice.actions
    const { todos } = useAppSelector(state => state.todoReducer)
    const { tags } = useAppSelector(state => state.tagReducer)

    const [todoText, setTodoText] = useState('')
    const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenModalTag, setIsOpenModalTag] = useState(false)

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
        setTodoText('')
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
            <div className='main-tag__wrapper'>
                <Title>Tags:</Title>
                <div className='main-tag__list'>
                    {tags && tags.map(tag => {
                        return <TagItem key={tag.id} tag={tag} />
                    })}
                </div>
                <Button
                    className='main-tag__btn'
                    onClick={() => setIsOpenModalTag(true)}
                >
                    Добавить
                </Button>
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
                <UpdateTodo
                    currentTodo={currentTodo}
                    handleInputUpdate={handleInputUpdate}
                    handleUpdateTodo={handleUpdateTodo}
                />
            </Modal>
            <Modal isOpen={isOpenModalTag} setIsOpen={setIsOpenModalTag}>
                <CreateTag setIsOpenModal={setIsOpenModalTag} />
            </Modal>
        </div>
    );
};

export default Main;