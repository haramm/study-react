import React, { useState } from 'react';

function UseStateExam(props) {

    const [num01, setNum01] = useState(0);
    const [num02, setNum02] = useState(0);
    const [result, setResult] = useState(0);

    const add = () => {
        setResult(Number(num01) + Number(num02));
    }

    const minus = () => {
        setResult(Number(num01) - Number(num02));
    }

    return (
        <>
            <p>결과 : {result}</p>
            <div>
                <input type='text' name='num01' value={num01} onChange={(e) => setNum01(e.target.value)}></input>
                <input type='text' name='num02' value={num02} onChange={(e) => setNum02(e.target.value)}></input>
            </div>
            <button type='button' onClick={add}>더하기</button>
            <button type='button' onClick={minus}>빼기</button>
        </>
    );
}

export default UseStateExam;