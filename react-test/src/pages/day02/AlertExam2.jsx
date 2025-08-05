import React, { useState } from 'react';

function AlertExam2(props) {

    const [inputText1, setInputText1] = useState('');
    const [inputText2, setInputText2] = useState('');
    const [result, setResult] = useState('');

    const addEvt = () => {
        if(inputText1.trim().length === 0) {
            alert('값을 입력하세요');
            return false;
        }
        if(inputText2.trim().length === 0) {
            alert('값을 입력하세요');
            return false;
        }
        setResult(Number(inputText1) + Number(inputText2));
    }

    return (
        <div>
            <div>결과 : {result.length === 0 ? '없음' : result}</div>
            <input type='text' name='text1' onChange={(e) => setInputText1(e.target.value)}></input>
            <input type='text' name='text2' onChange={(e) => setInputText2(e.target.value)}></input>
            <button type='button' onClick={addEvt}>더하기</button>
        </div>
    );
}

export default AlertExam2;