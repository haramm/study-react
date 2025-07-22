import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DataTable({dataList}) {
    return (
        <>
            <table className='table'>
                <thead>
                    <tr className='table-dark'>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>성별</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataList?.map((st) => (
                            
                            <tr key={st.id}>
                                <td>{st.id}</td>
                                <td>{st.name}</td>
                                <td>{st.age}</td>
                                <td>{st.gender}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default DataTable;