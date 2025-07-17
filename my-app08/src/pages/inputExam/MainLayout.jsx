import React, { useState } from 'react';
import { SumContext } from './SumContext';
import SubComponent from './SubComponent';


function MainLayout(props) {

    const [result, setResult] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const add = () => {
        setResult(Number(num1) + Number(num2));
    }
    return (

        <>
            <p>결과 : {result}</p>
            <SumContext.Provider value={{add, setNum1, setNum2}}>
                <SubComponent/>
                
            </SumContext.Provider>
        </>
    )
}

export default MainLayout;