import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import LoginExam from "../exam/LoginExam";

describe('로그인 테스트', () => {
    
    let alertMock;

    beforeEach(() => {
        alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    });

    const user = userEvent.setup();

    it('미입력 후 로그인 시 아이디, 비밀번호 미입력 경고 출력', async() => {
        render(<LoginExam/>);
        const userId = screen.getByLabelText('아이디');
        const userPw = screen.getByLabelText('비밀번호');
        const loginBtn = screen.getByRole('button', {name : '로그인'});
        
        await user.click(loginBtn);
        expect(userId.value.trim().length).toBe(0);
        expect(userPw.value.trim().length).toBe(0);
        
        expect(alertMock).toHaveBeenCalledWith('아이디와 비밀번호를 입력하세요');
    });

    it('아이디 입력, 비밀번호 미입력 시 비밀번호 미입력 경고', async() => {

        render(<LoginExam/>);
        const userId = screen.getByLabelText('아이디');
        const userPw = screen.getByLabelText('비밀번호');
        const loginBtn = screen.getByRole('button', {name : '로그인'});
        

        await user.type(userId, '11');
        await user.type(userPw, ' ');

        await user.click(loginBtn);
        expect(alertMock).toHaveBeenCalledWith('비밀번호를 입력하세요');
    });

    it('비밀번호 입력, 아이디 미입력 시 아이디 미입력 경고', async() => {

        render(<LoginExam/>);
        const userId = screen.getByLabelText('아이디');
        const userPw = screen.getByLabelText('비밀번호');
        const loginBtn = screen.getByRole('button', {name : '로그인'});
        

        await user.type(userId, ' ');
        await user.type(userPw, '11');

        await user.click(loginBtn);
        expect(alertMock).toHaveBeenCalledWith('아이디를 입력하세요');
    });

    it('비밀번호 입력, 아이디 입력 시 로그인 성공 출력', async() => {

        render(<LoginExam/>);
        const userId = screen.getByLabelText('아이디');
        const userPw = screen.getByLabelText('비밀번호');
        const loginBtn = screen.getByRole('button', {name : '로그인'});
        

        await user.type(userId, '11');
        await user.type(userPw, '11');

        await user.click(loginBtn);
        expect(alertMock).toHaveBeenCalledWith(`로그인 성공: 11`);
    });
});