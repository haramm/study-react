import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import CheckboxExam from '../../pages/day02/CheckboxExam';

const user = userEvent.setup();

describe('초기상태는 체크박스 체크 없음', () => {
    
    it('체크박스 안했을 때', () => {
        render(<CheckboxExam/>);

        const movieCheck = screen.getByLabelText('영화감상');
        const soccerCheck = screen.getByLabelText('축구');
        const basketballCheck = screen.getByLabelText('농구');

        //처음은 모두 해제
        expect(movieCheck).not.toBeChecked();
        expect(soccerCheck).not.toBeChecked();
        expect(basketballCheck).not.toBeChecked();
        expect(screen.getByText('취미 : 없음')).toBeInTheDocument();
    })

    it('체크박스 클릭 시', async() => {
        render(<CheckboxExam/>);

        const movieCheck = screen.getByLabelText('영화감상');
        const soccerCheck = screen.getByLabelText('축구');
        const basketballCheck = screen.getByLabelText('농구');

        await user.click(movieCheck);
        await user.click(basketballCheck);

        //처음은 모두 해제
        expect(movieCheck).toBeChecked();
        expect(soccerCheck).not.toBeChecked();
        expect(basketballCheck).toBeChecked();

        const button = screen.getByRole('button', {name : '취미출력'});
        await user.click(button);

        expect(screen.getByText('취미 : 영화, 농구')).toBeInTheDocument();
    })
})