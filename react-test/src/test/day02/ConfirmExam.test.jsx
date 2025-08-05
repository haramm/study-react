import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import ConfirmExam from '../../pages/day02/ConfirmExam';


describe('테스트', () => {

    let alertMock;
    //시작하기 전 사전 처리
    beforeEach(() => {
        alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    })

    //후 처리
    afterEach(() => {
        alertMock.mockRestore();
    })
    const user = userEvent.setup();

    it('삭제확인을 하면 삭제 멘트 출력', async() => {
        render(<ConfirmExam/>);
        const confirmMock = vi.spyOn(window, 'confirm').mockReturnValue(true);
        const button = screen.getByRole('button', {name: '삭제'});
        await user.click(button);
        expect(confirmMock).toHaveBeenCalledWith('정말로 삭제하겠습니까?');
        //yes로 설정
        expect(alertMock).toHaveBeenCalledWith('삭제됨');
    })

    it('삭제확인을 하면 삭제 멘트 출력', async() => {
        render(<ConfirmExam/>);
        const confirmMock = vi.spyOn(window, 'confirm').mockReturnValue(false);
        const button = screen.getByRole('button', {name: '삭제'});
        await user.click(button);
        expect(confirmMock).toHaveBeenCalledWith('정말로 삭제하겠습니까?');
        //no로 설정
        expect(alertMock).toHaveBeenCalledWith('삭제 취소');
    })

});