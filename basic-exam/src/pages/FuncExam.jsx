import React, { useState } from 'react';

function FuncExam(props) {
    
    const [user, setUser] = useState({});

    const updateInfo = (e) => {
        const {name, value} = e.target;
        user[name] = value;
        setUser({...user}); //user.key = value, user[key] = value;
        // 객체의 갱신은 주소의 변경
    }

    const outputPrint = () => {
        console.log(user);
    }

    return (
        <div>
            <label htmlFor='myName'>이름 : </label>
            <input type='text' name='myName' onChange={updateInfo}/><br/>
            <label htmlFor='myName'>나이 : </label>
            <input type='text' name='age' onChange={updateInfo}/><br/>
            <label htmlFor='myName'>성별 : </label>
            <input type='text' name='gender' onChange={updateInfo}/><br/>
            <button type='button' onClick={outputPrint}>출력</button>
        </div>
    );
}

export default FuncExam;