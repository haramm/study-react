import React, { use, useState } from 'react';
import Button from '../components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function OperaorExam(props) {

    const[one, setOne] = useState(0);
    const[two, setTwo] = useState(0);
    const[op, setOp] = useState('+');
    const[result, setResult] = useState(0);

    const operatorValue = () => {
        
        let cal = 0;
        
        switch(op) {
            case '+' : 
                cal = Number(one) + Number(two);
            break;
            case '-' : 
                cal = Number(one) - Number(two);
            break;
            case '*' : 
                cal = Number(one) * Number(two);
            break;
            case '/' : 
                if(Number(two) == 0) {
                    alert('0으로는 나눌 수 없음');
                    cal = 0;
                    return;  //함수종료
                }
                cal = Number(one) / Number(two);
                break;
            
        }
        //결과 업데이트
        setResult(cal);
    }

    return (
        <div className='container mt-5'>
            <div className='w-75 mx-auto text-center'>
                <label htmlFor='one'>첫번째 : </label>
                <input type='text' id='one' onChange={(e) => setOne(e.target.value)}></input>
                <select className='mx-3' style={{width : '100px'}} onChange={(e) => setOp(e.target.value)} >
                    <option value="+" selected>+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <label htmlFor='two'>두번째 : </label>
                <input type='text' id='two' onChange={(e) => setTwo(e.target.value)}></input>
            </div>
            <div className='text-end w-75 mt-3'>
                <Button bgColor={'#aaeeaa'} clickEvent={operatorValue}>입력</Button>
            </div>
            <div className='w-75 text-center'>
                <p>결과 : {result}</p>
            </div>
        </div>
    );
}

export default OperaorExam;