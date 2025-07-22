import React, { useState } from 'react';
import {styled} from 'styled-components';


const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
`

function InputExam(props) {

    const [list, setList] = useState([]);
    const [count, setCount] = useState(1);
    const [inputText, setInputText] = useState('');

  
    const handleInput = (e) => {
        setInputText(e.target.value);
    };

  
    const clickBtn = () => {
        const newItem = { id: count, text: inputText };
        setList([...list, newItem]);
        setCount(count + 1);
    };

    return (
        <div>
            <input type='text' onChange={(e) => handleInput(e)}/>
            <button type='button' onClick={clickBtn}>입력</button>
            <InputDiv>
                {
                    list?.map((list) => (
                        <ul key={list.id}>
                            <li>
                                id : {list.id}<br/>
                            </li>
                            <li>
                                text : {list.text}
                            </li>
                        </ul>
                    ))
                }
            </InputDiv>
        </div>
    );
}

export default InputExam;