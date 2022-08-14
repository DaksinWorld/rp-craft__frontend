import {ILogin, IRegister, ITransferData} from "../interfaces/input";
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

    static async login(dto: ILogin) {
        const res = await axios.post(baseUrl + '/auth/login', {login: dto.email, password: dto.password, bscWallet: dto.bscWallet})
        return res.data
    }

    static async getUserData(jwt: string) {
        const res = await axios.get(baseUrl + '/user/getOne', {
            headers: {
                "Authorization": `Bearer ` + jwt
            }
        })
        return res.data
    }

    static async autocomplete(string: string) {
        const res = await axios.get(baseUrl + "/user/autocomplete?text=" + string)
        return res.data
    }

    static async checkJwt(jwt: string) {
        return await axios.get(baseUrl + '/auth/checkJwt', {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
    }

    static async sendTransfer(transferData: ITransferData) {
        if(localStorage.getItem('access_token')) {
            return await axios.post(baseUrl + '/user/transfer', {
                amount: transferData.amount,
                recipientId: transferData.pickedUser._id
            }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            })
        }
    }
}