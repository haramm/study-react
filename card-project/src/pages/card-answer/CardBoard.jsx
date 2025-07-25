import React, { useState } from 'react';
import '../card-answer/cards.css';
import Card from '../card-answer/Card.jsx';

function CardBoard_answer(props) {

    const [cardList, setCardList] = useState([]);

    const createCard = () => {
        const numbers = [];
        for(let i = 0; i < 5; i++) {
            const val = Math.floor(Math.random() * 20) + 1;
            numbers.push(val);
        }
        setCardList(numbers);
    }

    const deleteCard = () => {
        setCardList([]);
    }

    const addCard = () => {
        console.log('aa');
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
                    <button className='btn' onClick={createCard}>생성</button>
                    <button className='btn' onClick={deleteCard}>삭제</button>
                    <button className='btn' onClick={addCard}>추가</button>
                </section>
            </main>
        </div>
    );
}


export default CardBoard_answer;