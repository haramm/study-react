import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TodoList2 from "../../pages/day02/TodoList2";
import userEvent from "@testing-library/user-event";
import { useRef, useState } from "react";


//mock 데이터 / 기능 --> fake 기능 or 데이터
const mockList = [
    {id : 1, contents : '안녕'}
]

const mockAddTodo = vi.fn();

function TodoListWrapper() {
    const id = useRef(1);
    const [list, setList] = useState([
        {id: ++id.current, contents : '안녕'}
    ]);
    
    const addTodo = () => {
        setList((prev) => [...prev, {id:id.current++, contents : '안녕'}]);
    }
    return <TodoList2 todoList={list} addTodo={addTodo}/>
}

describe('TodoList2 테스트', () => {
    
    it('처음에는 데이터 1개 보인다', () => {

        render(<TodoList2 todoList={mockList} addTodo={mockAddTodo}/>);

        const row = screen.getAllByTestId('row-item');
        expect(row).toHaveLength(1);  //길이 판단
    })
});

describe('TodoList 테스트', () => {

    it('추가를 누르면 이벤트 동작', async () => {

        render(<TodoList2 todoList={mockList} addTodo={mockAddTodo}/>);
        const user = userEvent.setup();
        

        const addBtn = screen.getByRole('button', {name : '추가'});
        await user.click(addBtn);

        expect(mockAddTodo).toHaveBeenCalledTimes(1);
    })
});

describe('TodoList 통합테스트', () => {
    

    it('추가를 누르면 갯수 증가', async () => {

        render(<TodoListWrapper/>);
        const user = userEvent.setup();

        const addBtn = screen.getByRole('button', {name : '추가'});
        await user.click(addBtn);

        const row = screen.getAllByTestId('row-item');
        expect(row).toHaveLength(2);  //길이 판단
    })
});