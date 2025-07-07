import React from 'react';

function Exam02(props) {
    const temp = Math.floor(Math.random() * 40) + 1;

    return (
        <div>
            <div>오늘 날씨는 매우 더움</div>
            {
                temp >= 35 && <div>폭염 주의!!, 온도: {temp}</div>
            }
        </div>
    );
}

export default Exam02;