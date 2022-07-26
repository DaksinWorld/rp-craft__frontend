import {FormEvent} from "react";

export interface IHandleInput {
    e: FormEvent<HTMLInputElement>,
    type: 'name' | 'password' | 'email'
}

export interface IRegister {
    name: string;
    email: string;
    password: string;
    bscWallet: string;
    balance: number;
}