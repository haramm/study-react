import React from 'react';
import MenuBar from '../components/MenuBar';
import { Outlet } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/layout.css';

function Layout(props) {
    return (
        <div>
            <MenuBar/>
            <section className='contents'>
                <Outlet/>
            </section>
        </div>
    );
}

export default Layout;