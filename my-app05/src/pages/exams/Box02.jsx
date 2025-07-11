import React from 'react';
import {styled} from 'styled-components';


const DivBox = styled.div`
    width: ${(props) => props.$width || 0};
    height: ${(props) => props.$height || 0};
    background-color: ${(props) => props.$color || 'black'};
`

function Box02(props) {
    return (
        <div>
            <DivBox $width={props.width} $height={props.height} $color={props.color}></DivBox>
        </div>
    );
}

export default Box02;