import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.button`
    width: 60px;
    height: 34px;
    background-color: ${(props) => props.$bgColor || 'red'};
    color: white;
    text-align: center;
`

function Button({bgColor, onClick, text}) {

    return (
        <>
            <ButtonDiv $bgColor={bgColor} onClick={onClick}>{text}</ButtonDiv>
        </>
    );
}

export default Button;