import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function UseCallbackExam01(props) {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const upCount1 = () => {
        setCount1(count1 + 1);
    }

    const upCount2 = () => {
        setCount2(count2 + 1);
    }

    //리렌더링 될 필요없는 함수이나 버튼 클릭마다 필요없는 함수 재실행 -> useCallback 사용하여 해결 가능
    const printCount1 = () => {
        console.log(count1);
    }

     const printCount2 = () => {
        console.log(count2);
    }

    useEffect(() => {
        console.log('print 함수 실행');
    },[printCount1]);

    useEffect(() => {
        console.log('print 함수 실행');
    },[printCount2]);

    return (
        <div>
            <p>카운트 1 : {count1}</p>
            <p>카운트 2 : {count2}</p>
            <div>
                <button type='button' onClick={upCount1}>증가1</button>
                <button type='button' onClick={upCount2}>증가2</button>
            </div>
        </div>
    );
}

export default UseCallbackExam01;