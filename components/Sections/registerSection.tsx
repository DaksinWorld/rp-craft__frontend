import React, {FormEvent, memo, useState} from 'react';
import {IHandleInput, IRegister} from "../../interfaces/input";
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
    const [register, setRegister] = useState<IRegister>({name: '', email: '', password: '', bscWallet: '', balance: 0})
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false)
    const [step, setStep] = useState<number>(1)

    const router = useRouter()

    /*Register user*/
    const [fetchRegister, isLoading, error] = useFetching<any>(async () => {
        const res = await RequestService.register(register)
        if (!res.error) {
            localStorage.setItem('access_token', res)
            router.push('/profile')
        }
    })

    const handleInput = ({e, type}: IHandleInput) => {
        setRegister({...register, [type]: (e.target as HTMLInputElement).value})
    }

    const handleForm = () => {
        //@ts-ignore
        fetchRegister()
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
                    {step === 1 && (<>
                        <div>
                            <div className='text-xl font-semibold mb-4'>
                                Enter your name, pls
                            </div>
                            <Input
                                onChange={(e) => handleInput({e, type: 'name'})}
                                type="text"
                                id="exampleFormControlInput2"
                                placeholder="Name"
                            />
                        </div>
                        <Button type='submit' color={'blue'} text={'Next Step'} onClick={() => setStep(2)}
                                disabled={!register.name}/>
                    </>)}
                    {
                        step === 2 && (<>
                            <div>
                                <div className='text-xl font-semibold mb-4'>
                                    We are almost done
                                </div>
                                <Input
                                    className={'mb-5'}
                                    onChange={(e) => handleInput({e, type: 'email'})}
                                    type="email"
                                    id="exampleFormControlInput2"
                                    placeholder="Email"
                                />
                                <Input
                                    onChange={(e) => handleInput({e, type: 'password'})}
                                    type="password"
                                    id="exampleFormControlInput2"
                                    placeholder="Password"
                                />
                            </div>
                            <Button onClick={() => {
                                handleForm()
                            }} type='button' color={'blue'} text={'Done'}
                                    disabled={!register.password && !register.email}/>
                        </>)
                    }
                </Modal>
            </motion.div>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center justify-center items-center flex-wrap h-full g-6"
                    >
                        <div className="md:mb-0 flex flex-col items-center">
                            <div className="mb-7 flex flex-row items-center justify-center lg:justify-start">
                                <h3 className="text-2xl text-center mb-0 font-semibold">Sign Up</h3>
                            </div>
                            <div>
                                <MetamaskButton login={register} setIsModalOpened={setIsModalOpened}
                                                setLogin={setRegister}/>
                            </div>
                            <form>
                                <div className="lg:text-left">
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Already have an account?
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-200 ease-in-out"
                                        >Login</a>
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