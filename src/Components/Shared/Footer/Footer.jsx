import React from 'react';
import Footer_Logo from '../../../assets//logo-xl.png';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import FooterText from './FooterText';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-white'>
            <div className="container mx-auto pt-20 flex flex-col items-center gap-6 pb-10 border-b border-[#1A8862]/20 px-5 lg:px-0 text-center">
                <div className="flex flex-col items-center gap-4">
                    <img src={Footer_Logo} alt="KeenKeeper" />
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <h1 className='text-xl font-medium leading-7'>Social Links</h1>
                    <div className="flex items-center text-[#101727] gap-4">
                        <a href="" className='flex items-center justify-center rounded-full bg-white border border-white hover:bg-transparent hover:text-white transition duration-300'>
                            <RiInstagramFill className='m-2 text-xl' />
                        </a>
                        <a href="" className='flex items-center justify-center rounded-full bg-white border border-white hover:bg-transparent hover:text-white transition duration-300'>
                            <FaFacebookSquare className='m-2 text-xl' />
                        </a>
                        <a href="" className='flex items-center justify-center rounded-full bg-white border border-white hover:bg-transparent hover:text-white transition duration-300'>
                            <BsTwitterX className='m-2 text-xl' />
                        </a>
                    </div>
                </div>
            </div>
            <div className="">
                <FooterText />
            </div>
        </div>
    );
};

export default Footer;