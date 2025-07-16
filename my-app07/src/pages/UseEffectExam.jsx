import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function UseEffectExam(props) {

    const [scoreList, setScoreList] = useState([]);
    const [avg, setAvg] = useState(0);
    const [score, setScore] = useState({kor : 0, eng : 0, math : 0});
    const [grade, setGrade] = useState('');

    //useMemo는 view에서 복잡한 계산의 결과를 화면에 출력하는 경우에 효율적,
    //복잡한 계산의 결과를 2차 연산 or 가공에 사용할 경우,
    //useEffect를 사용하여 cpu와 메모리 사용을 좀 더 효율적이게 할 수 있다.
    useEffect(() => {
        if(scoreList.length === 0) return;

        const sum = scoreList.reduce((sum, num) => sum + num);
        const newAvg = (sum / scoreList.length).toFixed(2);
        setAvg(newAvg);

        if(newAvg >= 75) {
            setGrade('PASS');
        }
        else {
            setGrade('FAIL');
        }

    },[scoreList]);

    const insertScore = (e) => {
        const {id, value} = e.target;
        setScore((prev) => ({...prev, [id]:Number(value)}));
    }

    const makeScore = () => {
        console.log(score);
        setScoreList([score.kor, score.eng, score.math]);
    }

    return (
        <div>
            <p>국어 : {score.kor}, 영어 : {score.eng}, 수학 : {score.math}</p>
            <p>평균 : {avg}, {grade}</p>
            <div>
                <label htmlFor='kor'>국어 : </label>
                <input type='number' id='kor'onChange={(e) => insertScore(e)}/><br/>
                <label htmlFor='kor'>영어 : </label>
                <input type='number' id='eng'onChange={(e) => insertScore(e)}/><br/>
                <label htmlFor='kor'>수학 : </label>
                <input type='number' id='math'onChange={(e) => insertScore(e)}/><br/>
            </div>
            <button type='button' onClick={makeScore}>계산</button>
        </div>
    );
}

export default UseEffectExam;