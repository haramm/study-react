import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function ListExam01(props) {

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
            <main className='container d-flex justify-content-center align-items-center w-100 vh-100'>
                <section className='w-50'>
                    <table className='table'>
                        <colgroup>
                            <col style={{width:'60%'}}/>
                            <col style={{width:'20%'}}/>
                            <col style={{width:'20%'}}/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>이름</th>
                                <th>학년</th>
                                <th>성별</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   //map 함수는 return이 있어서 화면에 표현 
                                // forEach는 return이 없어서 작동은 하나 화면에 표현되지 않음
                                list?.map((obj,index) => (
                                    //html을 loop로 표현 시 loop 대상은 key 속성을 가진다
                                    //key 속성은 loop 대상을 식별하는 값이라 중복x
                                    <tr key={index}>
                                        <td>{obj.myName}</td>
                                        <td>{obj.grade}</td>
                                         <td>{obj.gender}</td>
                                    </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
}

export default ListExam01;