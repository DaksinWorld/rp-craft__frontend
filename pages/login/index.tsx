import React, {useState} from 'react';
import {useERC20Balances, useMoralis} from "react-moralis";
import RegisterSection from "../../components/Sections/registerSection";
import LoginSection from "../../components/Sections/loginSection";

const Login = () => {
    const [currentSection, setCurrentSection] = useState('login')

    const changeSection = (sectionName: string): void => {
        setCurrentSection(sectionName)
    }

    return (
        <div className={'container text-3-xl text-black p-0'}>
            {currentSection === 'login'
                ?
                <LoginSection changeSection={changeSection}/>
                :
                <RegisterSection changeSection={changeSection}/>
            }
        </div>
    );
};

export default Login;