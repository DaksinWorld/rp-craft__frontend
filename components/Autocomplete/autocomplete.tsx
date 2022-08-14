import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from "./autocomplete.module.css";
import {ITransferData, IUserData} from "../../interfaces/input";
import {RequestService} from "../../utils/RequestService";
import Input from "../UI/Input/input";
import Button from "../UI/Button/button";

const Autocomplete = ({fetchUser}: any) => {
    const sendTransfer = async () => {
        await RequestService.sendTransfer(transferData)
    }

    const handleAutocomplete = async () => {
        const res = await RequestService.autocomplete(transferData.inputValue)
        setAutocomplete(res)
    }

    // @ts-ignore
    const [transferData, setTransferData] = useState<ITransferData>({pickedUser: IUserData, inputValue: '', amount: 0})
    const [autocomplete, setAutocomplete] = useState<IUserData[]>()

    useEffect(() => {
        handleAutocomplete()
    }, [transferData.inputValue])

    const handleInputData =(e: ChangeEvent<HTMLInputElement> | string) => {
        let target: HTMLInputElement | string = ''

        if (typeof e !== "string") {
            target = e.target as HTMLInputElement
            setTransferData({...transferData, inputValue: target.value})
        } else {
            setTransferData({...transferData, inputValue: target})
        }
    }

    const handleUser = (user: IUserData) => {
        setTransferData({...transferData,inputValue: '', pickedUser: user})
    }

    const handleSubmit = () => {
        sendTransfer()
        fetchUser()
    }

    return (
        <div className={'flex flex-col'}>
            <Input
                value={transferData.inputValue}
                className={styles.margin0}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>handleInputData(e)} type="text"/>
            <div className={'flex flex-col relative'}>
                {autocomplete && autocomplete.map((e) => (
                    <span tabIndex={1} key={e._id} onClick={() => {handleUser(e)}} className={styles.autocomplete}>{e.name}/{e.email}</span>
                ))}
            </div>
            {transferData.pickedUser && <Input
                onChange={(e: ChangeEvent<HTMLInputElement> ) => setTransferData({...transferData, amount: +e.target.value})}
                value={transferData.amount} type="number"/>}
            {transferData.amount !== 0 && <Button onClick={() => handleSubmit()} color={'blue'} text={'Submit'} type={'submit'}/>}
            {transferData.pickedUser && <span>Picked User: {transferData.pickedUser.name}</span>}
        </div>
    );
};

export default Autocomplete;