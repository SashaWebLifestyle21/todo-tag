import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';
import Title from "../common-components/Title/Title";
import Input from "../common-components/Input/Input";
import Button from "../common-components/Button/Button";
import {ITodo} from "../../redux/reducers/ToDoSlice";
import {setHighlihts} from "../../utils/setHighlihts";
import {regex} from "../../utils/regex";
import './UpdateTodo.scss'
import TodoTags from "../common-components/TagItem/todoTags";

interface IUpdateTodo {
    currentTodo: ITodo | null
    handleInputUpdate: (e: React.FormEvent<HTMLInputElement>) => void
    handleUpdateTodo: () => void
    setNewTag: Dispatch<SetStateAction<string[]>>
    setCurrentTodo: Dispatch<SetStateAction<ITodo | null>>
    newTag: string[]
}

const UpdateTodo = ({ handleUpdateTodo, currentTodo, setNewTag, setCurrentTodo, newTag }: IUpdateTodo) => {

    const highlightsRef = useRef<HTMLDivElement>(null);

    const handleSetHighlight = (value: string) => {
        const highlightedText = setHighlihts(value, regex)
        if(highlightsRef.current) {
            if(highlightedText) {
                highlightsRef.current.innerHTML = highlightedText
            }
        }
    }

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        if(currentTodo) {
            let newTags = e.currentTarget.value.match(/#[a-zA-Zа-яА-ЯёЁ0-9_]+/g)
            if(newTags) {
                setNewTag(newTags)
            }
            handleSetHighlight(e.currentTarget.value)
            setCurrentTodo({...currentTodo, text: e.currentTarget.value})

        }
    }

    useEffect(() => {

        if(currentTodo) {
            handleSetHighlight(currentTodo.text)
            let newTags = currentTodo.text.match(/#[a-zA-Zа-яА-ЯёЁ0-9_]+/g)
            if(newTags) {
                setNewTag(newTags)
            } else {
                setNewTag([])
            }
        }
    }, [currentTodo])


    return (
        <>
            <Title>Обновить заметку</Title>
            <div className='tag-list'>
                {newTag && newTag?.map(tag => {
                    return <TodoTags key={tag} text={tag} />
                })}
            </div>
                <div className='back-input'>
                    <div className='highlights-input' ref={highlightsRef} />
                </div>
                <Input
                    className='input-update'
                    type={'text'}
                    value={currentTodo ? currentTodo.text : ''}

                    onChange={handleInput}
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