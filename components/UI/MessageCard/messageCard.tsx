import React, {useContext} from 'react';
import {MobxContext} from "../../../pages/_app";
import cn from "classnames";

const MessageCard = () => {
    const {messageData} = useContext(MobxContext)

    const bT = 'border-t-2 p-3 px-4'

    return (
        <div className={cn('fixed bottom-[30px] bg-black right-[50px]', {
            [`${bT} border-red-400`]: messageData.type === 'danger',
            [`${bT} border-green-200`]: messageData.type === 'primary',
            [`${bT} border-yellow-200`]: messageData.type === 'warning'
        })}>
            {messageData.value}
        </div>
    );
};

export default MessageCard;