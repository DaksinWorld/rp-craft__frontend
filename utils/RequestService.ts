import {IRegister} from "../interfaces/input";
import axios from "axios";
import {baseUrl} from "../api";


export class RequestService {
    static async register(dto: IRegister) {
        const obj = {
            ...dto,
            login: dto.email
        }
        const res = await axios.post(baseUrl + '/auth/register', obj)
        return res.data
    }
}