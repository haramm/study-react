import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import LoginHeader from './LoginHeader';
import Contents from './Contents';

function LoginLayout(props) {

    const [isLogin, setIsLogin] = useState(false);

    const logout = () => {
        setIsLogin(false);
    }

    const login = () => {
        setIsLogin(true);
    }


    const contentsCss = {
        display : 'flex',
        height : '100vh',
        flexDirection : 'column'
    }

    return (
        <div>
            <AuthContext.Provider value={{isLogin, login, logout}}>
                <div style={contentsCss}>
                    <LoginHeader/>
                    <Contents/>
                    
                </div>
            </AuthContext.Provider>
        </div>
    );
}

export default LoginLayout;