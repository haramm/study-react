import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TestExam01 from "../pages/TestExam01";
import {userEvent} from '@testing-library/user-event';

//비슷한 목적을 가진 테스트 끼리 그룹화
describe('컴포넌트 테스트', () => {
    it('초기 카운트는 0이고 버튼 누르면 증가', async() => {
        render(<TestExam01/>);
        //기대
        expect(screen.getByText('카운트 : 0')).toBeInTheDocument();

        //버튼 누르기
        const button = screen.getByRole('button', {name : '증가'});

        //이벤트 객체 선언
        const user = userEvent.setup();

        //버튼 클릭
        await user.click(button);
        expect(screen.getByText('카운트 : 1')).toBeInTheDocument();
    })
})