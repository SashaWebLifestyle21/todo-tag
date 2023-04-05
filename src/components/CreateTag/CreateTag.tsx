import React, {Dispatch, SetStateAction, useState} from 'react';
import Title from "../common-components/Title/Title";
import Input from "../common-components/Input/Input";
import Button from "../common-components/Button/Button";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {tagSlice} from "../../redux/reducers/tagSlice";
import {validateTag} from "../../utils/validateTag";

interface ICreateTag {
    setIsOpenModal: Dispatch<SetStateAction<boolean>>
}

const CreateTag = ({ setIsOpenModal }: ICreateTag) => {

    const dispatch = useAppDispatch()
    const { createTag } = tagSlice.actions
    const { tags } = useAppSelector(state => state.tagReducer)

    const [tagText, setTagText] = useState('')

    const handleInputTag = (e: React.FormEvent<HTMLInputElement>) => {
        setTagText(e.currentTarget.value)
    }

    const handleCreateTag = () => {
        const newTag = {
            id: Date.now().toString(),
            text: '#' + tagText
        }

        if(validateTag(newTag.text, tags)) {
            dispatch(createTag(newTag))
            setIsOpenModal(false)
            setTagText('')
        }
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