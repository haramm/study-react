import React, { useCallback, useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/lottoBoard.css';
import CompLotto from '../components/CompLotto';
import UserLottoTable from '../components/UserLottoTable';

function LottoBoard(props) {

    const [compLotto, setCompLotto] = useState([]);
    const [userLotto, setUserLotto] = useState([]);


    const getNumbers = useCallback((isBonus) => {
        const balls = [];
        let count = 0;
        const loopCount = isBonus ? 7 : 6;
        let bonusNum = 0;
        while(count < loopCount) {
            const rand = Math.floor(Math.random() * 45) + 1;
            if(balls.length > 0 && balls.some(ball => ball.number === rand)) {
                continue;
            }
            
            if(count === 6 && isBonus) {
                bonusNum = rand;
                break;
            }
            else {
                const newBall = {number : rand, match : false};
                balls.push(newBall);
                count++;
            }
            
        }
        
        return {lotto: balls, bonusNum : bonusNum, rank : ''};
    }, []);

    const createCompLotto = () => {
        setCompLotto(getNumbers(true));
    }

    const createUserLotto = () => {
        const userLotto = Array.from({length : 5}, () => getNumbers(false));
        setUserLotto(userLotto);
    }

    const compareLotto = () => {
        const updated = [];
        let count = 0;
        let bonus = 0;
        for(let users of userLotto) {
            count = 0;
            for(let myLotto of users.lotto) {
                if(compLotto.lotto.some(x => x.number === myLotto.number)) {
                    myLotto.match = true;
                    count++;
                }
            }

            //보너스번호
            if(count === 5) {
                bonus = users.lotto.find(x => x.number === compLotto.number) ?? -1;
            }
            //등수
            let rank = '0';
            if(count === 6) {
                rank = '1등';
            }
            else if(count === 5 && bonus > 0) {
                rank = '2등';
            }
            else if(count === 5) {
                rank = '3등';
            }
            else if(count === 4) {
                rank = '4등';
            }
            else if(count === 3) {
                rank = '5등';
            }
            else {
                rank = '꽝';
            }

            updated.push({lotto : users.lotto, rank : rank, bonusNum : bonus});
        }
        setUserLotto(updated);
        
    }

    return (
        <>
            <main className='container'>
                <header className='header'>
                    <h2>로또 시스템</h2>
                </header>
                <section className='contents'>
                    <section className='evt-button'>
                        <button type='button' 
                                className='btn btn-primary me-2' 
                                onClick={createCompLotto}>로또 생성</button>
                        <button type='button' 
                                className='btn btn-success me-2'
                                disabled={compLotto.length === 0}
                                onClick={createUserLotto}>사용자 생성</button>
                        <button type='button'
                                disabled={userLotto.length === 0}
                                className='btn btn-warning me-2'
                                onClick={compareLotto}>로또 비교</button>
                    </section>
                    <section>
                        <CompLotto compLotto={compLotto}/>
                    </section>
                    <section>
                        <UserLottoTable userLotto={userLotto}/>
                    </section>
                </section>
                
            </main>
        </>
    );
}

export default LottoBoard;