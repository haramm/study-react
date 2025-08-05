import React, { useState } from 'react';

function AlertExam(props) {

    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState('');

    const onConfirm = () => {
        if(inputText.trim().length === 0) {
            alert('값을 입력하세요');
            return false;
        }
        setResult(inputText);
    }

    return (
        <div>
            <div>결과 : {result.length === 0 ? '없음' : result}</div>
            <input type='text' onChange={(e) => setInputText(e.target.value)}></input>
            <button type='button' onClick={onConfirm}>입력확인</button>
        </div>
    );
}

export default AlertExam;