import React from 'react';
import {styled} from 'styled-components';

function CssExam03(props) {

    const Main = styled.div`
        background-color : #eeaaee;
        width: 300px;
        height: 300px;
        border: 1px solid black;
        color: black;
    `;

    return (
        <>
            <Main></Main>   
        </>
    );
}

export default CssExam03;