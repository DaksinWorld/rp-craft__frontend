import React, {FormEvent, memo, useState} from 'react';
import {IHandleInput, ILogin, IRegister} from "../../interfaces/input";
import Hr from "../UI/Hr/hr";
import Input from "../UI/Input/input";
import {motion} from 'framer-motion'
import Modal from "../UI/Modal/modal"
import MetamaskButton from "../MetamaskButton/metamask-button";
import Button from "../UI/Button/button";
import {useFetching} from "../../hook/useFetch";
import {RequestService} from "../../utils/RequestService";
import {useRouter} from "next/router";

const RegisterSection = ({changeSection}: any) => {
    const [login, setLogin] = useState<ILogin>({email: '', password: '', bscWallet: ''})
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false)

    const router = useRouter()

    /*Login user*/
    const [fetchLogin, isLoading, error] = useFetching<any>(async () => {
        const res = await RequestService.login(login)
        if (res.name !== 'AxiosError') {
            localStorage.setItem('access_token', res.access_token)
            router.push('/profile')
        }
        console.log(res)
    })

    const handleInput = ({e, type}: IHandleInput) => {
        setLogin({...login, [type]: (e.target as HTMLInputElement).value})
    }

    const handleForm = () => {
        //@ts-ignore
        fetchLogin()
    }

    const variants = {
        open: {
            opacity: 1,
            display: 'block'
        },
        closed: {
            opacity: 0,
            display: 'none'
        }
    }

    return (
        <>
            <motion.div
                animate={isModalOpened ? 'open' : 'closed'}
                variants={variants}
            >
                <Modal setModal={setIsModalOpened}>

                    <>
                        <div className={'flex flex-col text-center'}>
                            <div className='text-xl font-semibold mb-4'>
                                Login
                            </div>
                            <Input
                                className={'mb-5'}
                                onChange={(e) => handleInput({e, type: 'email'})}
                                type="email"
                                value={login.email}
                                id="exampleFormControlInput2"
                                placeholder="Email"
                            />
                            <Input
                                onChange={(e) => handleInput({e, type: 'password'})}
                                value={login.password}
                                type="password"
                                id="exampleFormControlInput2"
                                placeholder="Password"
                            />
                        </div>
                        <Button onClick={(e) => {
                            e.preventDefault()
                            handleForm()
                        }} type='button' color={'blue'} text={'Done'}
                                disabled={!login.password && !login.email}/>
                    </>

                </Modal>
            </motion.div>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            className="bg-[#0B0E11] p-12 shadow-[0_0_15px_5px_rgba(0,0,0,0.7)] rounded-[22px] flex flex-col items-center">
                            <div className="flex flex-row items-center justify-center ">
                                <h3 className="text-4xl text-[#C7C7C7] mb-0 mr-4 font-bold">Sign In</h3>
                            </div>
                            <Hr/>
                            <div>
                                <MetamaskButton login={login} setIsModalOpened={setIsModalOpened}
                                                setLogin={setLogin}/>
                            </div>
                            <form>
                                <div className="lg:text-left">
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Doesn't have an account?
                                        <button
                                            onClick={() => changeSection('register')}
                                            className="text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-200 ease-in-out"
                                        >Register</button>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(RegisterSection);