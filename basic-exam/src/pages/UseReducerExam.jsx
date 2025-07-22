import React, { useReducer, useState } from 'react';

function UseReducerExam(props) {

    const bankReducer = (state, action) => {
        switch(action.type) {
            case 'deposit':
                return state + Number(action.payload);
            case 'withdraw':
                return state - Number(action.payload);
            default:
                return state;
        }
    }

    const [balance, dispatch] = useReducer(bankReducer, 10000);
    const [money, setMoney] = useState(0);

    const updateBalance = (action) => {
        if(action === 'withdraw' && (balance < money)) {
            alert('잔액보다 큰 돈은 출금이 불가능합니다');
            return false;
        }
        if(action === 'withdraw') {
            dispatch({type : 'withdraw', payload : Number(money)});
        }
        else if(action === 'deposit') {
            dispatch({type : 'deposit', payload : Number(money)});
        }
        
    }

    

    

    return (
        <div>
            <p>잔액 : {balance}</p>
            <div>
                <label htmlFor='money'>금액 : </label>
                <input type='number' id='money' value={money} onChange={(e) => setMoney(e.target.value)}/>
            </div>
            <div>
                <button type='button' onClick={(e) => updateBalance('deposit')}>입금</button>
                <button type='button' onClick={(e) => updateBalance('withdraw')}>출금</button>
            </div>
        </div>
    );
}

export default UseReducerExam;