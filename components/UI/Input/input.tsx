import React from 'react';
import {InputProps} from "./input.props";
import cn from "classnames";

const Input = ({type,className, ...props}: InputProps) => {

    const inputTypeTextClasses = 'form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
    const inputTypeCheckBoxClasses = 'form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'

    return (
        <input
            type={type}
            className={cn(className, {
                [inputTypeCheckBoxClasses]: type === 'checkbox',
                [inputTypeTextClasses]: type === 'text' || type === 'password' || type === 'email',
            })}
            {...props}
        />
    );
};

export default Input;