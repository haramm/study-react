import { useContext, useState } from "react";
import { SumContext } from "./SumContext";


function SubComponent(props) {

    const {add, setNum1, setNum2} = useContext(SumContext);
    

    
    return (
        <>
            <input type="number" onChange={(e) => setNum1(e.target.value)}/>
            <input type="number" onChange={(e) => setNum2(e.target.value)}/>
            <button type="button" onClick={add}>더하기</button>
        </>
    );
}

export default SubComponent;