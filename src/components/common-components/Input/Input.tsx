import React from 'react';
import './Input.scss'

interface IInput {
    type: 'text' | 'number'
    value?: string | number
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void
    placeholder?: string
}

const Input = ({ type, value, placeholder, onChange }: IInput) => {
    return (
        <input
            type={type}
            className='input'
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Input;