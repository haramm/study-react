import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import '../assets/css/dashBoard.css';

function DashBoard(props) {
    return (
        <div>
            <nav className='nav'>
                <ul>
                    <li>
                        {/* Link는 내부적으로 a태그 사용 css 변경하고자 할 시 a를 변경 */}
                        <NavLink to="/dash/board"
                        className={({isActive}) => isActive ? 'active' : ''}>게시판</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dash/gallery"
                        className={({isActive}) => isActive ? 'active' : ''}>갤러리</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                {/* 자식 컴포넌트가 랜더링 되는 위치 */}
                <Outlet/>
            </div>
        </div>
    );
}

export default DashBoard;