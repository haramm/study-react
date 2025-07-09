import React from 'react';
import '../../assets/css/tableLayout.css'
import ListGrid from './ListGridComp';
function TableLayout(props) {

    class Student {
        constructor(myName, grade, gender) {
            this.myName = myName;
            this.grade = grade;
            this.gender = gender;
        }
    }

    const list = [
        new Student('홍길동',1,'남자'),
        new Student('이성진',1,'남자'),
        new Student('고길동',1,'남자'),
        new Student('김민구',2,'남자'),
        new Student('성시영',2,'남자'),
        new Student('김수지',2,'여자')
    ];

    return (
        <>
            <main className='main'>
                <header>
                    <h2>게시판</h2>
                </header>
                <section className='w-100 mt-5'>
                    {/* 컴포넌트는 태그 형식으로 호출 
                        화면이기 때문에 ..tag에 적용되어야 함
                   */}
                    <ListGrid listData = {list}/>
                </section>
            </main>
        </>
    );
}

export default TableLayout;