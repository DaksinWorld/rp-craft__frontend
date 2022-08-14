import {ILogin, IRegister} from "../../interfaces/input";


export interface MetamaskProps {
    login?: ILogin | IRegister,
    setLogin?: any,

    setIsModalOpened: any
}