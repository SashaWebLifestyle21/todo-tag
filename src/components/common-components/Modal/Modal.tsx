import React, {Dispatch, PropsWithChildren, SetStateAction} from 'react';
import './Modal.scss'
import Button from "../Button/Button";

interface IModal extends PropsWithChildren {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ isOpen, setIsOpen, children }: IModal) => {
    return (
        <div className={`modal-overlay ${isOpen ? 'modal-active' : ''}`}>
            <div  className="modal-box">
                <Button
                    className='modal-close'
                    onClick={() => setIsOpen(false)}
                >
                    X
                </Button>
                {children}
            </div>
        </div>
    );
};

export default Modal;