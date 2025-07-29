import React from 'react';
import styled from 'styled-components';

const LottoBall = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid gray;
    color: ${(p) => p.$match ? 'white' : 'black'};
    background-color: ${(p) => p.$match ? '#e67154' : 'white'};
`

function Ball({number, match = false}) {
    return (
        <div>
            <LottoBall $match = {match}>{number}</LottoBall>
        </div>
    );
}

export default Ball;