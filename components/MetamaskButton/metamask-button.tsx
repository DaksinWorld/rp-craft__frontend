import React from 'react';
import {useMoralis} from "react-moralis";
import {MetamaskProps} from "./metamask.props";

const MetamaskButton = ({register, setRegister, setIsModalOpened}: MetamaskProps) => {
    const {authenticate} = useMoralis()

    return (
        <button
            onClick={() => {
                authenticate().then((r: any): any => {
                    if(r.attributes) {
                        setRegister({...register, bscWallet: r.attributes.ethAddress})
                        setIsModalOpened(true)
                    }
                })
            }}
            className={'flex flex-row items-center text-lg font-semibold p-3 rounded-md border border-gray-200 hover:border-orange-200'}>
            <img width={30} className={'mr-2'} src="/icons/metamask.svg" alt="metamask"/>
            Metamask
        </button>
    );
};

export default MetamaskButton;