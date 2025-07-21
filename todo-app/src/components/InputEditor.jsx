import React, { useRef } from 'react';
import '../assets/css/inputEditor.css';

function InputEditor({inputText, setInputText, createTodo}) {

    const inputRef = useRef();


    const keyEnter = (e) => {
        if(e.keyCode === 13) {
            console.log('enter');
        }
    }

    const createNewTodo = (e) => {
        if(inputText.trim().length === 0) {
            alert('할 일을 입력하세요');
            inputRef.current.focus();
            return false;
        }
        createTodo();
    }

    return (
        <>
            <section className='editor'>
                <div className='in-txt'>
                    <input type='text' placeholder='할 일 입력'
                            className='form-control'
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyDown={keyEnter}
                            ref={inputRef}
                            name='inputText'
                    />
                </div>
                <div className='input-btn'>
                    <button type='button' 
                            className='btn btn-success'
                            onClick={createNewTodo}>등록</button>
                </div>
            </section>
        </>
    );
}

export default InputEditor;