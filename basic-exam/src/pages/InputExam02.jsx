import React, { useEffect, useState } from 'react';

function InputExam02(props) {

    const [numList, setNumList] = useState([]);
    const [inputNum, setInputNum] = useState(0);
    const [sum, setSum] = useState(0);

    

    const addEvent = () => {
        setNumList([...numList, inputNum]);
    }

    useEffect(() => {
        setSum(Number(sum) + Number(inputNum));

    },[numList]);

    return (
        <div>
            <label htmlFor='input'>입력 : </label>
            <input type='text' onChange={(e) => setInputNum(e.target.value)}/>
            <button type='button' onClick={addEvent}>입력</button>
            <div>
                <p>합 : {sum}</p>
                {
                    numList?.map((num,index) => (
                        <p key={index}>{num}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default InputExam02;