import React from 'react';
import styles from './modal.module.css'
import {ModalProps} from "./modal.props";

const Modal = ({children, setModal}: ModalProps) => {
    return (
        <div className={styles.modal} onClick={() => setModal(false)}>
            <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;