import React, {Dispatch, SetStateAction} from 'react';
import './TagItem.scss'
import {ITag, tagSlice} from "../../../redux/reducers/tagSlice";
import Text from "../Text/Text";
import Button from "../Button/Button";
import {useAppDispatch} from "../../../hooks/redux";

interface ITagItem {
    tag: ITag
    handleTag: (tag: string) => void
    filterTag: string
    setFilterTag: Dispatch<SetStateAction<string>>
}

const TagItem = ({ tag, handleTag, filterTag, setFilterTag }: ITagItem) => {

    const dispatch = useAppDispatch()
    const { removeTag } = tagSlice.actions

    const handleRemoveTag = () => {
        dispatch(removeTag(tag.id))
        setFilterTag('')
    }

    return (
        <div
            className={`tag ${filterTag === tag.text ? 'tag-active' : ''}`}
            onClick={() => handleTag(tag.text)}
        >
            <Text>{tag.text}</Text>
            <Button
                className='tag__btn'
                onClick={handleRemoveTag}
            >
                X
            </Button>
        </div>
    );
};

export default TagItem;