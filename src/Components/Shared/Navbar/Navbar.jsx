import React from 'react';
import { BsGraphUp } from 'react-icons/bs';
import { LuClock3 } from 'react-icons/lu';
import { RiHome2Line } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='border-b border-[#E9E9E9]'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-[#244D3F] text-white' : '') + ' py-3 px-4 flex items-center gap-1 text-lg font-semibold rounded-sm text-[#64748B]'}>
                                <RiHome2Line /> Home
                            </NavLink>
                            <NavLink to="/timeline" className={({ isActive }) => (isActive ? 'bg-[#244D3F] text-white' : '') + ' py-3 px-4 flex items-center gap-1 text-lg font-semibold rounded-sm text-[#64748B]'}>
                                <LuClock3 /> Timeline
                            </NavLink>
                            <NavLink to="/friends-details" className={({ isActive }) => (isActive ? 'bg-[#244D3F] text-white' : '') + ' py-3 px-4 flex items-center gap-1 text-lg font-semibold rounded-sm text-[#64748B]'}>
                                <BsGraphUp /> Stats
                            </NavLink>
                        </ul>
                    </div>
                    <a className="text-2xl font-semibold">Keen<span className='text-[#244D3F]'>Keeper</span></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-[#244D3F] text-white' : '') + ' py-3 px-4 flex items-center gap-1 text-lg font-semibold rounded-sm text-[#64748B]'}>
                            <RiHome2Line /> Home
                        </NavLink>
                        <NavLink to="/timeline" className={({ isActive }) => (isActive ? 'bg-[#244D3F] text-white' : '') + ' py-3 px-4 flex items-center gap-1 text-lg font-semibold rounded-sm text-[#64748B]'}>
                            <LuClock3 /> Timeline
                        </NavLink>
                        <NavLink to="/friends-details" className={({ isActive }) => (isActive ? 'bg-[#244D3F] text-white' : '') + ' py-3 px-4 flex items-center gap-1 text-lg font-semibold rounded-sm text-[#64748B]'}>
                            <BsGraphUp /> Stats
                        </NavLink>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;



