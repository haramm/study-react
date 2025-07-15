import React from 'react';
import '../src/assets/css/useReducer2.css';
import { useRef } from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import Box from '../src/components/Box';
function UseReducerExam02(props) {

    const idx = useRef(1);

    const boxReducer = (state, action) => {

        let newBoxList = [];

        switch(action.type) {
            case 'create':
                return [...state, {id:(++idx.current), bgColor : action.payload}];
            case 'delete':
                newBoxList = state.filter(obj => obj.id !== idx.current);
                idx.current--;
                return newBoxList;
            case 'init':
                idx.current = 0;
                return [];
            default:
                return state;
        }
    }

    
    const [boxList, dispatch] = useReducer(boxReducer, []);

    // const createBox = () => {
    //     const newBoxList = [...boxList, {id:(++idx.current), bgColor : makeColor()}];
    //     setBoxList(newBoxList);
    // }

    // const deleteBox = () => {
    //     const newBoxList = boxList.filter(obj => !obj.id === idx.current);
    //     idx.current--;
    //     setBoxList(newBoxList);
    // }

    const updatedBox = (action) => {
        dispatch({type : action, payload : makeColor()});
        console.log(boxList);
    }

    function makeColor() {
        const colors = [];
        colors.push('#');

        for(let i = 0; i < 3; i++) {
            //0~255 사이 값을 16진수로 변경
            let color = Math.floor(Math.random() * 256).toString(16);
            if(color.length === 1) {
                color = '0' + color;
            }
            colors.push(color);
        }
        return colors.join('');
    }

    return (
        <>
            <main className='container'>
                <section className='contents'>
                    <section className='canvas'>
                        {
                            boxList?.map(obj => (
                                <Box bgColor={obj.bgColor}/>
                            ))
                        }
                    </section>
                    <section className='btn-box'>
                        <button type='button' className='btn' onClick={(e) => updatedBox('create')}>Box 생성</button>
                        <button type='button'className='btn' onClick={(e) => updatedBox('delete')}>Box 삭제</button>
                        <button type='button'className='btn' onClick={(e) => updatedBox('init')}>초기화</button>
                    </section>
                </section>
            </main>
        </>
    );
}

export default UseReducerExam02;