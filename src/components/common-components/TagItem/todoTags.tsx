import React from 'react';
import Text from "../Text/Text";
import './TagItem.scss'

interface ITodoTags {
    text: string
}

const TodoTags = ({ text }: ITodoTags) => {
    return (
        <div
            className={`tag`}
        >
            <Text>{text}</Text>
        </div>
    );
};

export default TodoTags;