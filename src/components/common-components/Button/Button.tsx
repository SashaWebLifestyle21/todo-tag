import React, {PropsWithChildren} from 'react';
import './Button.scss'

interface IButton extends PropsWithChildren {
    className?: string
    onClick?: () => void
}

const Button = ({ children, className, onClick }: IButton) => {
    return (
        <button
            className={`button ${className ? className : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;