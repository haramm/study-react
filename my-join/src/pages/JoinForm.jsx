import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/joinForm.css';
import {useForm, useWatch} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup'; 
import FindAddrModal from '../modal/FindAddrModal';

const validSchema = yup.object().shape({
    userId : yup.string()
                .trim().required('아이디를 입력하세요')
                .min(4, '아이디는 최소 4자리 이상이여야 합니다'),
    passwd : yup.string().required('비밀번호를 입력하세요'),
    gender : yup.string().required('성별을 선택하세요'),
    addr : yup.string().required('주소를 입력하세요'),
    addrDetail : yup.string().notRequired(),
});

function JoinForm(props) {

    const {register, handleSubmit, control, setValue, formState:{errors}} 
    = useForm({resolver: yupResolver(validSchema), defaultValues : {gender : 'man'}});

    const [addrModalShow, setAddrModalShow] = useState(false);

    //감시 기능
    const userId = useWatch({
        control,
        name : 'userId',
        defaultValue : ''
    });

    const submitJoin = (data) => {
        console.log(data);
    }

    const addrSelectComplete = useCallback((data) => {

        let fullAddr = '';
        let extraAddr = '';

        if(data.userSelectedType === 'R') {
            fullAddr = data.roadAddress;
        }
        else {
            fullAddr = data.jibunAddress;
        }
        //법정동 이름
        if(data.bname.length > 0 &&/|동|로|가|$/g.test(data.bname)) {
            extraAddr += data.bname;
        }

        //건물명
        if(data.buildingName.length > 0) {
            extraAddr += (extraAddr.length > 0 ? ', ' + data.buildingName : data.buildingName);
        }

        //꾸미기
        if(extraAddr.length > 0) {
            extraAddr = `(${extraAddr})`;
        }

        fullAddr = fullAddr + extraAddr;
        setValue('addr', fullAddr);

        console.log(data);
    },[setValue]);

    return (
        <div className='container'>
            <header className='mt-5'>
                <h2>회원 가입</h2>
            </header>
            <main className='contents'>
                <form onSubmit={handleSubmit(submitJoin)} autoComplete='off'>
                    <section className='form-line'>
                        <div className='row mb-3'>
                            <label htmlFor='userId' className='form-label'>아이디</label>
                            <div className='col-9'>
                                <input type='text'
                                        className={`form-control ${errors.userId ? 'is-invalid' : ''}`}
                                        id='userId'
                                        {...register('userId')}
                                />
                                {errors.userId && 
                                    <div className='invalid-feedback'>
                                        {errors.userId.message}
                                    </div>
                                }
                            </div>
                            <div className='col-3 text-end'>
                                <button type='button' 
                                        className='btn btn-success'
                                        disabled={!userId || userId.trim().length < 4}>중복확인</button>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='passwd' className='form-label'>비밀번호</label>
                            <div>
                                <input type='text'
                                        className={`form-control ${errors.passwd ? 'is-invalid' : ''}`}
                                        id='passwd'
                                        {...register('passwd')}/>
                                {errors.passwd && 
                                    <div className='invalid-feedback'>
                                        {errors.passwd.message}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div>
                                <label className='form-label'>성별</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input type='radio' 
                                        name='gender'
                                        id='man'
                                        value='man'
                                        {...register('gender')}
                                />
                                <label className='form-check-label' htmlFor='man'>남자</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input type='radio' 
                                        name='gender'
                                        id='woman'
                                        value='woman'
                                        {...register('gender')}
                                />
                                <label className='form-check-label' htmlFor='woman'>여자</label>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <label htmlFor='addr' className='form-label'>주소</label>
                            <div className='col-9'>
                                <input type='text'
                                        className={`form-control ${errors.addr ? 'is-invalid' : ''}`}
                                        id='addr'
                                        {...register('addr')}
                                />
                            </div>
                            <div className='col-3 text-end'>
                                <button type='button'
                                        className='btn btn-warning'
                                        onClick={() => setAddrModalShow(true)}>주소찾기</button>
                            </div>
                        </div>
                        <div>
                            <input type='text'
                                    className='form-control'
                                    id='addrDetail'
                                    {...register('addrDetail')}
                            />
                            {
                                errors.addr &&
                                (
                                    <>
                                        <div className='is-invalid'></div>
                                        <div className='invalid-feedback'>{errors.addr.message}</div>
                                    </>
                                )
                            }
                        </div>
                    </section>
                    <section className='text-center'>
                        <button type='submit' className='btn btn-primary me-2'>가입</button>
                        <button type='submit' className='btn btn-secondary'>취소</button>
                    </section>
                </form>
                <FindAddrModal show={addrModalShow} close={() => setAddrModalShow(false)} complete={addrSelectComplete}/>
            </main>
        </div>
    );
}

export default JoinForm;