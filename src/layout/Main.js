import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div className='px-10 MAIN_JS_FILE'>
            <Navbar />
            <Outlet />
            <h1 className=' text-center bg-indigo-200 py-2 mt-3 text-indigo-900 font-bold '>Hello</h1>
        </div>
    );
};

export default Main;