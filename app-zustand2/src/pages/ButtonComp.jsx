import React from 'react';
import useCounterStore from '../store/useCounterStore';

function ButtonComp(props) {

    const {addCount, minusCount} = useCounterStore();

    return (
        <div>
            <button onClick={addCount}>더하기</button>
            <button onClick={minusCount}>빼기</button>
        </div>
    );
}

export default ButtonComp;