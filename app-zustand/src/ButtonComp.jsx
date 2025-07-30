import React from 'react';
import UseCounterStore from './store/UseCounterStore';

function ButtonComp(props) {

    const {addNumber, minusNumber} = UseCounterStore();

    return (
        <div>
            <button onClick={addNumber}>더하기</button>
            <button onClick={minusNumber}>빼기</button>
        </div>
    );
}

export default ButtonComp;