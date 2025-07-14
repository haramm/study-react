import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {styled} from 'styled-components';
import Box02 from './Box02';


const Main = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
const ResultBox = styled.div`
    width: 300px;
    display: flex;
    margin-left: 10px;
`

function BoxLayout02(props) {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [color, setColor] = useState(0);

    

    const setBox = () => {
        return <Box02 width={width + 'px'} height={height + 'px'} color={"#" + color}></Box02>
    }

    return (
        <div>
            <Main>
                <form className='mt-5'>
                    <label htmlFor='width'>width</label>
                    <input type='text' name='width' id='width' className='ms-2 mb-2' onChange={(e) => setWidth(e.target.value)}></input><br/>
                    <label htmlFor='height'>height</label>
                    <input type='text' name='height' id='height' className='ms-2 mb-2' onChange={(e) => setHeight(e.target.value)}></input><br/>
                    <label htmlFor='width'>color</label>
                    <input type='text' name='color' id='color' className='ms-2 mb-2' onChange={(e) => setColor(e.target.value)}></input><br/>
                    <button type='button' onClick={setBox}>생성</button>
                </form>
            </Main>
            <ResultBox>
                <span>결과 :</span>
                {setBox()}
            </ResultBox>
            
        </div>
    );
}

export default BoxLayout02;