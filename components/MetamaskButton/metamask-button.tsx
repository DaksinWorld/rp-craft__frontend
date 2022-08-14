import React, {useEffect} from 'react';
import {useMoralis} from "react-moralis";
import {MetamaskProps} from "./metamask.props";
import styles from './metamask.module.css'
import cn from "classnames";
import {useFetching} from "../../hook/useFetch";
import {RequestService} from "../../utils/RequestService";
import {useRouter} from "next/router";

const MetamaskButton = ({login, setLogin, setIsModalOpened}: MetamaskProps) => {
    const {authenticate, isAuthenticated, logout} = useMoralis()
    const router = useRouter()
    const [checkJwt] = useFetching(async () => {
        const jwt = localStorage.getItem('access_token')
        if(jwt) {
            const res = await RequestService.checkJwt(jwt)
            if(res) {
                await router.push('/profile')
            }
        }
    })

    useEffect(() => {
        // @ts-ignore
        checkJwt()
        if(isAuthenticated && login?.bscWallet) {
            setIsModalOpened(true)
            console.log(login.bscWallet)
        }
    }, [])

    return (
        <>
            <button
                onClick={() => {
                    authenticate().then((r: any): any => {
                        if (r) {
                            setLogin({...login, bscWallet: r.attributes.ethAddress})
                            setIsModalOpened(true)
                        }
                    })
                }}
                className={cn('flex flex-row items-center', styles.metamaskButton)}>
                <img width={30} className={'mr-2'} src="/icons/metamask.svg" alt="metamask"/>
                Metamask
            </button>
        </>
    );
};

export default MetamaskButton;