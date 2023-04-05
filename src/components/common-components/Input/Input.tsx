import React from 'react';
import './Input.scss'

interface IInput {
    type: 'text' | 'number'
    value?: string | number
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
}

const Input = ({ type, value, placeholder, onChange, className }: IInput) => {
    return (
        <input
            type={type}
            className={`input ${className ? className : ''}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Input;