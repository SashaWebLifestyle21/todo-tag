import React, {Dispatch, SetStateAction, useState} from 'react';
import Title from "../common-components/Title/Title";
import Input from "../common-components/Input/Input";
import Button from "../common-components/Button/Button";
import {useAppDispatch} from "../../hooks/redux";
import {tagSlice} from "../../redux/reducers/tagSlice";

interface ICreateTag {
    setIsOpenModal: Dispatch<SetStateAction<boolean>>
}

const CreateTag = ({ setIsOpenModal }: ICreateTag) => {

    const dispatch = useAppDispatch()
    const { createTag } = tagSlice.actions

    const [tagText, setTagText] = useState('')

    const handleInputTag = (e: React.FormEvent<HTMLInputElement>) => {
        setTagText(e.currentTarget.value)
    }

    const handleCreateTag = () => {
        dispatch(createTag({
            id: Date.now().toString(),
            text: '#' + tagText
        }))
        setIsOpenModal(false)
        setTagText('')
    }

    return (
        <>
            <Title>Новый тэг</Title>
            <Input
                type={'text'}
                placeholder='Введите название тэга'
                value={tagText}
                onChange={handleInputTag}
            />
            <Button
                className='main-modal__btn'
                onClick={handleCreateTag}
            >
                Создать
            </Button>
        </>
    );
};

export default CreateTag;