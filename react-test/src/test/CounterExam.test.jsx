import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CounterExam from "../pages/CounterExam";
import userEvent from "@testing-library/user-event";

describe('카운터 테스트', () => {
    it('초기 카운터는 0이고 버튼 누르면 증가', async() => {
        render(<CounterExam/>);

        //기대
        expect(screen.getByText('결과 값: 0')).toBeInTheDocument();

        //버튼 누르기
        const buttonIncrease = screen.getByRole('button', {name : '증가'});
        const buttonDecrease = screen.getByRole('button', {name : '감소'});
        //const buttonIncrease = screen.getByText('증가');
        
        //이벤트 객체 선언
        const user = userEvent.setup();

        //버튼 클릭
        await user.click(buttonIncrease);
        expect(screen.getByText('결과 값: 1')).toBeInTheDocument();
        await user.click(buttonDecrease);
        expect(screen.getByText('결과 값: 0')).toBeInTheDocument();
        await user.click(buttonDecrease);
        expect(screen.getByText('결과 값: -1')).toBeInTheDocument();
    })
})