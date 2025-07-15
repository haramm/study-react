import React from 'react';
import {styled} from 'styled-components';

const Square = styled.div`
        width: 100px;
        height: 100px;
        border: 1px solid black;
        background-color: ${(props) => props.$bgColor || 'black'};
    `;

function Box({bgColor}) {

    

    return (
        <div>
            <Square $bgColor={bgColor}/>
        </div>
    );
}

export default Box;