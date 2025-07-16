import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

function UseMemoExam02(props) {

    const [numList, setNumList] = useState([]);
    const [num, setNum] = useState(0);

    //평균값 구하기
    //useMemo는 함수가 return하는 값을 기억. -> 메모이제이션
    //useMemo는 함수가 아니라 함수가 return하는 값을 기억하기 때문에 기본적으로 return형 함수에 사용
    //의존성이 변경되기 전에는 함수가 return하는 값을 기억했다가
    //의존성이 업데이트 되면 함수가 재실행되어 기억하는 return 값을 갱신 후 반환
    const avg = useMemo(() => {
        console.log('===평균값 구하기===');
        if(numList.length === 0) {
            return 0;
        }
        console.log(numList);
        const sum = numList.reduce((sum, num) => sum + num);
        return ((sum / numList.length).toFixed(2));
    }, [numList]);

    const insertNum = () => {
        setNumList((prev) => [...prev, Number(num)]);
        setNum('');
        
    }



    return (
        <div>
            <p>평균 값 : {avg}</p>
            <div>
                <label htmlFor='num'>입력 값: </label>
                <input type='number' value={num} onChange={(e) => setNum(e.target.value)}/>
                <button type='button' onClick={insertNum}>등록</button>
            </div>
        </div>
    );
}

export default UseMemoExam02;