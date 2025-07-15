import React from 'react';
import '../src/assets/css/ref.css';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
function UseRefExam02(props) {

    const idRef = useRef();
    const pwRef = useRef();

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    //시작할 때 한번만 실행
    useEffect(() => {
        idRef.current.focus();
    }, []);

    const goLogin = () => {
        if(userId.trim().length === 0) {
            alert('아이디를 입력하세요');
            idRef.current.focus();
            return false;
        }

        if(userPw.trim().length === 0) {
            alert('비밀번호를 입력하세요');
            pwRef.current.focus();
            return false;
        }

        alert('로그인 성공');
        
    }

    return (
        <div>
            <main className='login-form'>
                <section className='login-contents'>
                    <header className='header'>
                        <h2>로그인</h2>
                    </header>
                    <section className='input-form'>
                        <div className='form-box'>
                            <label htmlFor='userId'>아이디 : </label>
                            <input type='text' 
                                    className='in-txt'
                                    ref={idRef}
                                    onChange={(e) => setUserId(e.target.value)}></input>
                        </div>
                        <div className='form-box'>
                            <label htmlFor='userPw'>패스워드 : </label>
                            <input type='password' 
                                    className='in-txt'
                                    ref={pwRef}
                                    onChange={(e) => setUserPw(e.target.value)}></input>
                        </div>
                    </section>
                    <section className='btn-box'>
                        <button type='button' className='btn-login' onClick={goLogin}>로그인</button>
                        <button type='button' className='btn-join'>회원가입</button>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default UseRefExam02;