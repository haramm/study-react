import React from 'react';
import ChildComponent from './ChildComponent';
import { useState } from 'react';
import { useCallback } from 'react';

function UseCallbackExam03(props) {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('김철수');

    const upCount = () => {
        setCount(count + 1);
    }

    const changeName = useCallback(() => {
        setName(name === '김철수' ? '김영희' : '김철수');
    }, [name]);

    return (
        <div>
            <p>카운트 : {count}</p>
            <button type='button' onClick={upCount}>증가</button>
            <button type='button' onClick={changeName}>이름 변경</button>
            <div>
                <ChildComponent name={name} event={changeName}/>
            </div>
        </div>
    );
}

export default UseCallbackExam03;