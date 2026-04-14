import React from 'react';
import Navbar from "../Components/Shared/Navbar/Navbar.jsx";
import {Outlet} from "react-router";
import Footer from '../Components/Shared/Footer/Footer.jsx';

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <div className='flex-1'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
