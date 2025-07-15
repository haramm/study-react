import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';

function UseReducerExam01(props) {

    const accountReducer = (balance, action) => {
        console.log('======계좌 처리 프로세스 시작======');

        //return 자체가 상태 변경
        switch(action.type) {
            case 'deposit':
                return balance + Number(action.payload);
            case 'withdraw':
                return balance - Number(action.payload);
            default :
                return balance;
        }
    }

    const [balance, dispatch] = useReducer(accountReducer, 10000);
    const [money, setMoney] = useState(10000);
    

    const manageAccount = (action) => {
        
        dispatch({type : action, payload : money});
    }

    return (
        <div>
            <main>
                <header>
                    <h2>계좌 입출금</h2>
                </header>
                <section>
                    <p>잔액 : {balance}</p>
                </section>
                <section>
                    <label htmlFor='money'>금액 : </label>
                    <input type='number'
                            id='money'
                            value={money}
                            onChange={(e) => setMoney(e.target.value)}/>
                </section>
                <div>
                    <button type='button' onClick={() => manageAccount('deposit')}>입금</button>
                    <button type='button' onClick={() => manageAccount('withdraw')}>출금</button>
                </div>
            </main>
        </div>
    );
}

export default UseReducerExam01;