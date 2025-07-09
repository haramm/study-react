import React from 'react';
import '../assets/css/exam01.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
css 적용 1. className을 이용하는 방법
html에서 하던대로 클래스이름, 태그, 태그이름 등을 이용하여
css를 작성한 후 적용하는 방법을 그대로 이용 가능
리액트에서는 css module 방식이라고 함
*/
function CssExam1(props) {
    return (
        <>
            <main className='container vh-100 border border-1 border-black'>
                
            </main>
        </>
    );
}

export default CssExam1;