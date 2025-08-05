import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import AlertExam2 from "../../pages/day02/AlertExam2";
import userEvent from "@testing-library/user-event";

describe('두 값 더하기 결과 출력', () => {

    let alertMock;

    beforeEach(() => {
        alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    });
    
    it('처음에는 결과 없음', () => {
        render(<AlertExam2/>);
        expect(screen.getByText('결과 : 없음')).toBeInTheDocument();
    });

    it('입력 없이 처리 시 경고창', async () => {
        const user = userEvent.setup();
        render(<AlertExam2/>);

        const inputLst = screen.getAllByRole('textbox');

        await user.type(inputLst[0], ' ');
        await user.type(inputLst[1], ' ');

        expect(inputLst[0].value.trim().length).toBe(0);
        expect(inputLst[1].value.trim().length).toBe(0);
        await user.click(screen.getByRole('button', {name:'더하기'}));
        expect(alertMock).toHaveBeenCalledWith('값을 입력하세요');
    });

    it('두 입력된 값의 합 출력', async() => {
        const user = userEvent.setup();
        render(<AlertExam2/>);
        
        const inputLst = screen.getAllByRole('textbox');

        await user.type(inputLst[0], '1');
        await user.type(inputLst[1], '2');

        await user.click(screen.getByRole('button', {name:'더하기'}));
        expect(screen.getByText('결과 : 3')).toBeInTheDocument();
    })

});