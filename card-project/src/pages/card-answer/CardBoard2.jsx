import React, { useReducer, useState } from 'react';
import '../card-answer/cards.css';
import Card from '../card-answer/Card.jsx';

function CardBoard_answer2(props) {

    const actionReducer = (state, action) => {
        let numbers = [];
        switch(action) {
            case 'create':
                return Array.from({length : 5}, () => Math.floor(Math.random * 20) + 1);
            case 'delete':
                return [];
        }
    }

    const [cardList, dispatch] = useReducer(actionReducer, []);

    const updateCard = (action) => {

        dispatch({type : action});
    }
    
    return (
        <div>
            <main className='container'>
                <section className='contents'>
                    {
                        cardList?.map(cardNum => (
                            <Card number = {cardNum}/>
                        ))
                    }
                </section>
                <section className='btn-box'>
                    <button className='btn' onClick={() => updateCard('create')}>생성</button>
                    <button className='btn' onClick={() => updateCard('delete')}>삭제</button>
                </section>
            </main>
        </div>
    );
}


export default CardBoard_answer2;