import React from 'react';
import '../assets/css/login.css';

function Login({users, logUser, selected, setSelected, loginUser}) {

    return (
        <>
            <section className='login-form'>
                <select className='select form-control' 
                        value={selected} 
                        onChange={(e) => setSelected(e.target.value)}>
                            {
                                users?.map((userName, i) => (
                                    <option key={i} value={userName}>{userName}</option>
                                ))
                            }
                </select>
                <div>
                    <button type='button' 
                            className='btn btn-success'
                            onClick={loginUser}>로그인</button>
                </div>
                <div>{logUser ? logUser : '로그인'}</div>
            </section>
        </>
    );
}

export default Login;