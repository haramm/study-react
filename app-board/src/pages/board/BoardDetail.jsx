import React, { useEffect } from 'react';
import '../../assets/css/boardDetail.css';
import axios from 'axios';
import { useParams } from 'react-router';
import { useState } from 'react';

function BoardDetail(props) {

    const {id} = useParams();
    const [detail, setDetail] = useState({title : '', contents : ''});

    useEffect(() => {
        async function getBoard() {
            const response = await axios(`/api/board/${id}`);
            setDetail(response.data.data);
        }
        getBoard();
    },[]);

    const validate = () => {
        if(!detail.title.trim().length === 0) {
            alert('제목을 입력하세요');
            return false;
        }
        if(!detail.contents.trim().length === 0) {
            alert('내용을 입럭하세요');
            return false;
        }
        return true;
    }

    

    //폼데이터 전송
    const handleSubmit = async (e) => {
        //이상 동작 방지
        //하나의 이벤트가 끝나기 전까지 새로운 이벤트 발생을 막음
        e.preventDefault();

        const header = {
            headers: {'Content-Type' : 'application/json'}
        }
        if(validate()) {
            const res = await axios.put(`/api/board/${id}`, detail, header);
            console.log(res.data);
        }
    }

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setDetail((prev) => ({...prev, [name]:value}));
    }

    return (
        <>
            <section className='detail'>
                <div className='detail-form'>
                    <header className='mt-5 text-center'>
                        <h1>게시글 상세</h1>
                    </header>
                    <main className='detail-contents'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor='title'>제목 : </label>
                                <input type='text' 
                                        id="title" 
                                        className='form-control'
                                        value={detail.title}
                                        onChange={inputHandler}>
                                </input>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='content'>내용 : </label>
                                <textarea className='form-control' 
                                id='contents'
                                name='contents'
                                value={detail.contents || ''}
                                onChange={inputHandler}>
                                </textarea>
                            </div>
                            <div className='text-center'>
                                <button type='submit'
                                        className='btn btn-primary mx-2'>수정</button>
                                <button type='button'
                                        className='btn btn-secondary'>취소</button>
                            </div>
                        </form>
                    </main>
                </div>
            </section>
        </>
    );
}

export default BoardDetail;