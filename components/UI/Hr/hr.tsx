import React from 'react';
import cn from 'classnames'
import {HrProps} from "./hr.props";

const Hr = ({className, ...props}: HrProps) => {
    return (
        <hr className={cn(className, 'my-5')} {...props}/>
    );
};

export default Hr;