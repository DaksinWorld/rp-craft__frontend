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

export interface ILogin {
    email: string;
    bscWallet: string;
    password: string;
}

export interface IUserData {
    _id: string;
    name: string;
    email: string;
    balance: number;
    bscWallet: string;
    passwordHash: string;
}

export interface ITransferData {
    pickedUser: IUserData;
    inputValue: string;
    amount: number;
}