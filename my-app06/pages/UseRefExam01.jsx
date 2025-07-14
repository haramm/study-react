import React, { useEffect, useRef, useState } from 'react';

function UseRefExam01(props) {

    let count1= 0;
    const count2 = useRef(0);
    
    const [text, setText] = useState('');

    useEffect(() => {
        console.log('화면이 갱신');
    });
    //state가 변하면 화면이 재 갱신됨
    //일반 자바스크립트 변수는 그래서 초기화 되지만
    //ref로 선언한 변수는 이전 내용을 저장하고 있어 유지 가능
    const print = () => {
        count1++;
        count2.current++;

        console.log(count1,count2.current);
    }

    return (
        <div>
            <input type='text'value={text} onChange={(e) => setText(e.target.value)}/>
            <button type='button' onClick={print}>출력</button>
        </div>
    );
}

export default UseRefExam01;