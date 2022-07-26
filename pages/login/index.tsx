import React, {useState} from 'react';
import {useERC20Balances, useMoralis} from "react-moralis";
import RegisterSection from "../../components/RegisterSecion/registerSection";

const Login = () => {

    return (
        <div className={'container text-3-xl text-black p-0'}>
            {/*<div>
                {error && <>{JSON.stringify(error)}</>}
                <button onClick={() => fetchERC20Balances({ params: { chain: "0x38" } })}>Refetch</button>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
            <h2>{user.get('username')}</h2>
            <div>
                <button onClick={() => logout()}>Logout</button>
            </div>
            <div>
                <button onClick={() => authenticate()}>Authenticate</button>
            </div>
            */}
            {/*<section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <h3 className="text-2xl mb-0 mr-4 font-semibold">Sign in</h3>
                            </div>
                            <Hr/>
                            <div>
                                <button
                                    onClick={() => {
                                        authenticate()
                                    }}
                                    className={'flex flex-row items-center text-xl p-3 rounded-md border border-gray-200 hover:border-orange-200'}>
                                    <img width={30} className={'mr-2'} src="/icons/metamask.svg" alt="metamask"/>
                                    Login via Metamask
                                </button>
                            </div>
                            <form>
                                <Hr/>

                                <div className="mb-6">
                                    <Input
                                        type="text"
                                        id="exampleFormControlInput2"
                                        placeholder="Email address"
                                    />
                                </div>

                                <div className="mb-6">
                                    <Input
                                        type="password"
                                        id="exampleFormControlInput2"
                                        placeholder="Password"
                                    />
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <Input
                                            type="checkbox"
                                            id="exampleCheck2"
                                        />
                                        <label className="form-check-label inline-block text-gray-800"
                                               htmlFor="exampleCheck2"
                                        >Remember me</label
                                        >
                                    </div>
                                    <a href="#" className="text-gray-800">Forgot password?</a>
                                </div>

                                <div className="text-center lg:text-left">
                                    <button
                                        type="button"
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Login
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Don't have an account?
                                        <a
                                            href="#"
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        > Register</a
                                        >
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>*/}
            <RegisterSection />
        </div>
    );
};

export default Login;