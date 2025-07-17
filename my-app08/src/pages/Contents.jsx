import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from './AuthContext';

const MainLayout = styled.main`
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    
`

function Contents(props) {

    const {isLogin} = useContext(AuthContext);

    return (
        <>
            <MainLayout>
                {isLogin ?
                <p>로그인 성공, 환영합니다</p>
                :
                <p>로그아웃 성공, 안녕히 가십시오</p>
            }
            </MainLayout>
            
        </>
    );
}

export default Contents;