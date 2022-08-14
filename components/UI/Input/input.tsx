import React from 'react';
import {InputProps} from "./input.props";
import cn from "classnames";
import styles from './input.module.css'

const Input = ({type,value, className, ...props}: InputProps) => {

    return (
        <input
            type={type}
            value={value}
            className={cn(className, styles.input)}
            {...props}
        />
    );
};

export default Input;