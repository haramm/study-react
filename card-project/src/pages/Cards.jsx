import React from 'react';
import {styled} from 'styled-components';

const Card = styled.div`
    width: 150px;
    height: 150px;
    background-color: #acca77;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`;

const CheckboxDiv = styled.div`
    display: flex;
    height: 10%;
    
`
const NumberDiv = styled.div`
    display: flex;
    height: 90%;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 30px;
`

function Cards({number}) {
    return (
        <>
            <Card>
                <CheckboxDiv>
                    <input type="checkbox"/>
                </CheckboxDiv>
                <NumberDiv>
                    <span>{number}</span>
                </NumberDiv>
            </Card>
        </>
    );
}

export default Cards;