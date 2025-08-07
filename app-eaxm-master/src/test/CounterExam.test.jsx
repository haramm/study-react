import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CounterExam from "../exam/CounterExam";
import userEvent from "@testing-library/user-event";


describe('카운터 예제 테스트', () => {

    const user = userEvent.setup();
    
    it('초기 카운트는 0', () => {

        render(<CounterExam/>);
        expect(screen.getByText('결과 : 0'));
    });
    it('증가하기 버튼을 누르면 카운트 1 증가', async() => {
        render(<CounterExam/>);

        const addBtn = screen.getByRole('button', {name : '증가하기'});
        
        await user.click(addBtn);
        expect(screen.getByText('결과 : 1')).toBeInTheDocument();
    });

    it('감소하기 버튼을 누르면 카운트 1 감소', async () => {
        render(<CounterExam/>);
        const minusBtn = screen.getByRole('button', {name : '감소하기'});
        await user.click(minusBtn);
        expect(screen.getByText('결과 : -1')).toBeInTheDocument();
    });

    
});