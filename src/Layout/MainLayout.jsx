import React from 'react';
import Navbar from "../Components/Shared/Navbar/Navbar.jsx";
import {Outlet} from "react-router";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;