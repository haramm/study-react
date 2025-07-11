import React, { useEffect, useState } from 'react';



function UseEffectExam01(props) {

    const [count, setCount] = useState(0);

    const upCount = () => {
        setCount(count + 1);
    }

    useEffect( () => {
        console.log('실행1');
    });
    useEffect( () => {
        console.log('실행2');
    }, []);

    useEffect( () => {
        console.log('실행3');
    }, [count]);

    return (
        <div>
            <p> 값 : {count}</p>
            <button type='button' onClick={upCount}>증가</button>
        </div>
    );
}

export default UseEffectExam01;