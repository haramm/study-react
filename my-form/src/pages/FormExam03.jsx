import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({

    userId : yup.string()
    .trim()
    .required('아이디를 입력하세요')
    .min(1, '아이디를 입력하세요'),

    passwd : yup.string()
    .trim()
    .required('비밀번호를 입력하세요')
    .min(1, '비밀번호를 입력하세요'),

    passwdConfirm : yup.string()
    .required('비밀번호 확인을 입력하세요')
    .oneOf([yup.ref('passwd'), null], '비밀번호 확인이 일치하지 않습니다')
});

function FormExam03(props) {

    const {register, handleSubmit, watch, formState:{errors}} = useForm({resolver : yupResolver(schema), mode : onchange});

    const submitEvent = (data) => {
        console.log(data);
    }

    return (
        <div>
            <main>
                <form autoComplete='off' onSubmit={handleSubmit(submitEvent)}>
                    <div>
                        <label htmlFor='userId'>아이디 : </label>
                        <input type='text'
                                id='userId'
                                {...register('userId')}
                        />
                        {errors.userId && <p style={{color:'red'}}>{errors.userId.message}</p>}
                    </div>
                    <div>
                        <label htmlFor='passwd'>비밀번호 : </label>
                        <input type='password'
                                id='passwd'
                                {...register('passwd')}
                        />
                        {errors.passwd && <p style={{color:'red'}}>{errors.passwd.message}</p>}
                    </div>
                    <div>
                        <label htmlFor='passwdConfirm'>비밀번호 확인 : </label>
                        <input type='password'
                                id='passwdConfirm'
                                {...register('passwdConfirm')}
                        />
                        {errors.passwdConfirm && <p style={{color:'red'}}>{errors.passwdConfirm.message}</p>}
                    </div>
                    <button type='submit'>전송</button>
                </form>
            </main>
        </div>
    );
}

export default FormExam03;