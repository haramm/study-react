import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import TodoList from "../exam/TodoList";

describe('할일 기능 테스트', () => {

    let alertMock;

    beforeEach(() => {
        alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    });

    const user = userEvent.setup();

    it('할일 입력하지 않고 버튼 클릭 시 경고 출력', async() => {
        render(<TodoList/>);

        const inputText = screen.getByLabelText('할 일');
        const addBtn = screen.getByRole('button', {name : '추가'});

        expect(inputText.value.trim().length).toBe(0);

        await user.click(addBtn);

        expect(alertMock).toHaveBeenCalledWith('할일을 입력');
        
    });

    it('할일 입력 후 버튼 클릭 시 할일 생성, 화면에 표시', async () => {

    render(<TodoList />);

    const input = screen.getByLabelText('할 일');
    const addBtn = screen.getByRole('button', { name: '추가' });

    await user.type(input, '공부하기');
    await user.click(addBtn);

    
    const todoText = await screen.findByText('공부하기');
    expect(todoText).toBeInTheDocument();

    const id = await screen.findByText('1');
    expect(id).toBeInTheDocument();
  });

  it('할일 존재하는 상태에서 입력 후 버튼 클릭 시 할일 생성, 화면에 기존 할일과 생성된 할일 모두 출력', async () => {

    render(<TodoList />);

    const input = screen.getByLabelText('할 일');
    const addBtn = screen.getByRole('button', { name: '추가' });

    await user.type(input, '공부하기');
    await user.click(addBtn);

    
    const todoText = await screen.findByText('공부하기');
    expect(todoText).toBeInTheDocument();

    const id = await screen.findByText('1');
    expect(id).toBeInTheDocument();

    await user.clear(input);
    await user.type(input, '잠자기');
    await user.click(addBtn);

    const todoText2 = await screen.findByText('잠자기');
    expect(todoText2).toBeInTheDocument();

    const id2 = await screen.findByText('2');
    expect(id2).toBeInTheDocument();
  });
});