import React, {useEffect} from 'react';
import cn from "classnames";
import {ButtonProps} from "./button.props";
import styles from './button.module.css'

const Button = ({type, className, color, text, disabled, ...props}: ButtonProps) => {


    return (
        <button
            type={type}
            className={cn(styles.button, className)}
            disabled={disabled}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;