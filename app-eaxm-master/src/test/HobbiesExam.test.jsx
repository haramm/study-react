import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import HobbiesExam from "../exam/HobbiesExam";

describe('체크박스 테스트', () => {

    const user = userEvent.setup();

    it('초기상태, 체크박스 전부 해제 상태', async() => {

        render(<HobbiesExam/>);
        
        const movieCheck = screen.getByLabelText('영화');
        const musicCheck = screen.getByLabelText('음악감상');
        const walkCheck = screen.getByLabelText('산책');
        const gameCheck = screen.getByLabelText('게임하기');
        const btn = screen.getByRole('button' , {name : '확인'});

        expect(movieCheck).not.toBeChecked();
        expect(musicCheck).not.toBeChecked();
        expect(walkCheck).not.toBeChecked();
        expect(gameCheck).not.toBeChecked();

        await user.click(btn);

        expect(screen.getByText('선택 없음')).toBeInTheDocument();
    });

    it('체크박스 동작 여부', async() => {
        render(<HobbiesExam/>);
        const movieCheck = screen.getByLabelText('영화');
        const musicCheck = screen.getByLabelText('음악감상');
        const walkCheck = screen.getByLabelText('산책');
        const gameCheck = screen.getByLabelText('게임하기');
        const btn = screen.getByRole('button' , {name : '확인'});

        expect(movieCheck).not.toBeChecked();
        expect(musicCheck).not.toBeChecked();
        expect(walkCheck).not.toBeChecked();
        expect(gameCheck).not.toBeChecked();

        await user.click(movieCheck);
        await user.click(musicCheck);
        await user.click(walkCheck);
        await user.click(gameCheck);
        await user.click(btn);
        
        expect(movieCheck).toBeChecked();
        expect(musicCheck).toBeChecked();
        expect(walkCheck).toBeChecked();
        expect(gameCheck).toBeChecked();
    });
    it('버튼 클릭 시 체크된 취미 출력 여부', async() => {

        render(<HobbiesExam/>);
        const movieCheck = screen.getByLabelText('영화');
        const musicCheck = screen.getByLabelText('음악감상');
        const walkCheck = screen.getByLabelText('산책');
        const gameCheck = screen.getByLabelText('게임하기');
        const btn = screen.getByRole('button' , {name : '확인'});

        await user.click(movieCheck);
        await user.click(musicCheck);
        await user.click(walkCheck);
        await user.click(gameCheck);
        await user.click(btn);

        expect(screen.getByText('영화, 음악감상, 산책, 게임하기')).toBeInTheDocument();

    });
});