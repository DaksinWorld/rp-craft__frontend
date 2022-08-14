import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {MoralisProvider} from "react-moralis";
import {createContext} from "react";
import {useStore} from "../stores";
import MessageCard from '../components/UI/MessageCard/messageCard';

export const MobxContext= createContext({messageData: {value: '', type: ''}})

function MyApp({Component, pageProps}: AppProps) {
    const store = useStore(pageProps.initialState)

    return <MobxContext.Provider value={store}>
        <MoralisProvider appId="SsqO8xB5M3ydLMfqavPViV76UknhsQGYSta3KKax"
                         serverUrl="https://echdu7cnxalx.usemoralis.com:2053/server">
            <Component {...pageProps}/>
        </MoralisProvider>
    </MobxContext.Provider>
}

export default MyApp
