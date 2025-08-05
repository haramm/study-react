import React, { useRef, useState } from 'react';
import TodoList2 from './TodoList2';

function TodoLayout(props) {

    const id = useRef(1);
    const [list, setList] = useState([
        {id: ++id.current, contents : '안녕'}
    ]);

    const addTodo = () => {
        setList((prev) => [...prev, {id:id.current++, contents : '안녕'}]);
    }

    return (
        <div>
            <TodoList2 todoList={list} addTodo={addTodo}/>
        </div>
    );
}

export default TodoLayout;