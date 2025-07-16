import React, { useState } from 'react';
import styled from 'styled-components';
import Cards from './Cards';
import Button from './Button';

const Container = styled.div`
    
    width: 80vw;
    height: 60vh;
    border: 1px solid black;
    border-radius: 7px;
    background-color: #eaeaea;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const CardDiv = styled.section`
    
    height: 70%;
    background-color: #eeeeee;
    display: flex;
    flex-direction: row;
    padding: 15px 15px;
    
`

const BtnDiv = styled.section`
    
    height: 30%;
    background-color: #eeeaee;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

function CardBoard(props) {

    const [randNumList, setRandNumList] = useState([]);

    function makeRandNum() {
        return Math.floor((Math.random() * 50) + 1);
    }

    const onClickCreateBtn = () => {
        const numLst = [];
        for(let i = 0; i < 5; i++) {
            let randNum = makeRandNum();
            numLst.push(randNum);
            console.log(`랜덤 번호 : ${randNum}`);
        }
        setRandNumList(numLst);
    }

    const onClickDeleteBtn = () => {
        setRandNumList([]);
    }

    const onClickAddBtn = () => {
        const randNum = makeRandNum();
        setRandNumList([...randNumList, randNum]);
    }

    return (
        <>
            <Container>
                <CardDiv>
                    {
                        randNumList.map((randNum) => (
                            <Cards number={randNum}/>
                        ))
                    }
                </CardDiv>
                <BtnDiv>
                    <Button bgColor='green' onClick={onClickCreateBtn} text='생성'></Button>
                    <Button bgColor='yellow' onClick={onClickAddBtn} text='추가'></Button>
                    <Button bgColor='red' onClick={onClickDeleteBtn} text='전체 삭제'></Button>
                    <Button bgColor='yellow' onClick={onClickAddBtn} text='선택 삭제'></Button>
                </BtnDiv>
            </Container>
        </>
    );
}

export default CardBoard;