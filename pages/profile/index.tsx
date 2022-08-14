import React, {useContext, useEffect, useState} from 'react';
import {RequestService} from "../../utils/RequestService";
import {IUserData} from "../../interfaces/input";
import {useRouter} from "next/router";
import {useMoralis} from "react-moralis";
import {useFetching} from "../../hook/useFetch";
import Card from "../../components/UI/Card/card";
import Autocomplete from "../../components/Autocomplete/autocomplete";
import Button from "../../components/UI/Button/button";
import {MobxContext} from "../_app";
import MessageCard from "../../components/UI/MessageCard/messageCard";

const Index = () => {
    const router = useRouter()
    // @ts-ignore
    const {messageData, setMessage} = useContext(MobxContext)

    const [userData, setUserData] = useState<IUserData>({email: '', balance: 0, bscWallet: '', passwordHash: '', _id: '', name: ''})
    const [fetchUser] = useFetching(async() => {
        const jwt = localStorage.getItem('access_token')
        if(jwt) {
            const response = await RequestService.getUserData(jwt)
            if(response.code !== 200) {
                setMessage({value: response.error, type: 'danger'})
            }
            setUserData(response)
        }
    })

    const {logout} = useMoralis()

    const handleLogout = () => {
        logout()
        localStorage.removeItem('access_token')
        router.push('/login')
    }

    useEffect(() => {
        //@ts-ignore
        fetchUser()
    }, [])


    return (
        <div>
            <div className="layout container">
                <div className="flex justify-between">
                    <h1 className={'text-5xl text-white m-4 font-bold'}>Profile</h1>
                    <Button onClick={() => handleLogout()} color={'blue'} text={'Logout'} type={'button'}/>
                </div>
                <div className={'flex'}>
                    <Card className={'w-full m-4'}>
                        <div className="flex flex-col">
                            <h2 className={'text-white text-xl font-semibold'}>Balance: </h2>
                            <span className={'text-gray-400 texl-lg font-semibold'}>{userData.balance} $CERN</span>
                        </div>
                        <Autocomplete fetchUser={fetchUser}/>
                    </Card>
                    <Card className={'w-full m-4'}>
                        <h2 className={'text-white text-xl font-semibold'}>Inventory: </h2>
                    </Card>
                </div>
                <div className={'flex'}>
                    <Card className={'w-full m-4'}>
                        Profile
                    </Card>
                </div>
            </div>
            <MessageCard/>
        </div>
    );
};

export default Index;