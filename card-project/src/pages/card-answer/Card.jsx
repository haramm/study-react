import React from 'react';
import {styled} from 'styled-components';

const MyCard = styled.div`
    width: 70px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eeeeee;
    border-radius: 7px;
    background-color: #efaaef;

`

function Card({number}) {
    return (
        <div>
            <MyCard>
                <p>{number}</p>
            </MyCard>
        </div>
    );
}

export default Card;