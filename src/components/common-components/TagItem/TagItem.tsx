import React from 'react';
import './TagItem.scss'
import {ITag, tagSlice} from "../../../redux/reducers/tagSlice";
import Text from "../Text/Text";
import Button from "../Button/Button";
import {useAppDispatch} from "../../../hooks/redux";

interface ITagItem {
    tag: ITag
}

const TagItem = ({ tag }: ITagItem) => {

    const dispatch = useAppDispatch()
    const { removeTag } = tagSlice.actions

    const handleRemoveTag = () => {
        dispatch(removeTag(tag.id))
    }

    return (
        <div className='tag'>
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