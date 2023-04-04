import React from 'react';
import Title from "../common-components/Title/Title";
import Input from "../common-components/Input/Input";
import Button from "../common-components/Button/Button";
import {ITodo} from "../../redux/reducers/ToDoSlice";

interface IUpdateTodo {
    currentTodo: ITodo | null
    handleInputUpdate: (e: React.FormEvent<HTMLInputElement>) => void
    handleUpdateTodo: () => void
}

const UpdateTodo = ({ handleUpdateTodo, handleInputUpdate, currentTodo }: IUpdateTodo) => {
    return (
        <>
            <Title>Обновить заметку</Title>
            <Input
                type={'text'}
                value={currentTodo ? currentTodo.text : ''}
                onChange={handleInputUpdate}
            />
            <Button
                className='main-modal__btn'
                onClick={handleUpdateTodo}
            >
                Обновить
            </Button>
        </>
    );
};

export default UpdateTodo;