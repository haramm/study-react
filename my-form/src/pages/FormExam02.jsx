import React from 'react';
import {useForm} from 'react-hook-form';
function FormExam02(props) {

    //register : 필수 처리 등록
    //handleSubmit : submit 이벤트 처리
    //errors : 유효 체크 상태
    const {register, handleSubmit, formState:{errors}, setValue} = useForm(); 

    const submitEvt = (data) => {
        console.log(data);
    }

    const trimValue = (name, value) => {
        setValue(name, value.trim(), {shouldValidate : true});
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitEvt)}>
                <div>
                    <input type='text' 
                    {...register('userId', {required : '아이디를 입력하세요', 
                    validate : value => value.trim().length > 0 || '아이디를 입력하세요'})}
                    onBlur={(e) => trimValue('userId', e.target.value)} placeholder='아이디'/>
                    {errors.userId && <p style={{color : 'red'}}>아이디를 입력하세요.</p>}
                </div>
                <div>
                    <input type='password' {...register('passwd', {required : '비밀번호를 입력하세요',
                        validate : value => value.trim().length > 0 || '비밀번호를 입력하세요'})}
                        onBlur={(e) => trimValue('passwd', e.target.value)} placeholder='비밀번호'/>
                    {errors.passwd && <p style={{color : 'red'}}>비밀번호를 입력하세요.</p>}
                </div>
                <button type='submit'>전송</button>
            </form>
        </div>
    );
}

export default FormExam02;