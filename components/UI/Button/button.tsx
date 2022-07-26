import React, {useEffect} from 'react';
import cn from "classnames";
import {ButtonProps} from "./button.props";

const Button = ({type, className, color, text, disabled, ...props}: ButtonProps) => {

    const defaultClassName = 'disabled:bg-gray-300 disabled:text-gray-600 inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out'
    const blueColor = `bg-${color}-600 focus:bg-${color}-700 hover:bg-${color}-700 active:bg-${color}-800`

    return (
        <button
            type={type}
            className={cn(defaultClassName, className, blueColor)}
            disabled={disabled}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;