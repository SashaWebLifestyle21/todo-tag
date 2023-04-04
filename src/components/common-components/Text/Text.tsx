import React, {PropsWithChildren} from 'react';
import './Text.scss'

interface IText extends PropsWithChildren {
    className?: string
}

const Text = ({ className, children }: IText) => {
    return (
        <p className={`text ${className ? className : ''}`}>
            {children}
        </p>
    );
};

export default Text;