import React, { useState } from 'react';
import ButtonComp from './ButtonComp';
import BoxList from './BoxList';

function BoxLayout(props) {

    const [boxList, setBoxList] = useState([]);

    const addBox = () => {
        const color = makeColor();
        const box = {
            bgColor : color
        }
        
        setBoxList((prev) => ([...prev, box]));
    }

    const delBox = () => {
        boxList.pop();
        const newBoxList = [...boxList];
        setBoxList(newBoxList);
    }

    function makeColor() {
        const colors = [];
        colors.push('#');

        for(let i = 0; i < 3; i++) {
            //0~255 사이 값을 16진수로 변경
            let color = Math.floor(Math.random() * 256).toString(16);
            if(color.length === 1) {
                color = '0' + color;
            }
            colors.push(color);
        }
        return colors.join('');
    }

    return (
        <div>
            <BoxList boxList={boxList}/>
            <ButtonComp addBox={addBox} delBox={delBox}/>
        </div>
    );
}

export default BoxLayout;