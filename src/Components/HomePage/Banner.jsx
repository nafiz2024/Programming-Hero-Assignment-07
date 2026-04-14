import React from 'react';
import { MdAdd } from 'react-icons/md';

const Banner = () => {
    return (
        <div className='space-y-8 container mx-auto text-center pb-10'>
            <div className="space-y-4">
                <h1 className='text-4xl lg:text-5xl font-bold'>Friends to keep close in your life</h1>
                <p className='text-[#64748B] px-0 '>
                    Your personal shelf of meaningful connections. Browse, tend,
                    <br className="block lg:hidden" />
                    <span className="inline lg:hidden"> </span>
                    and nurture the
                    <br className="hidden lg:block" />
                    <span className="hidden lg:inline"> </span>
                    relationships that matter most.
                </p>
            </div>
            <div className="">
                <div className="btn bg-[#244D3F] text-white py-3 px-4 rounded-sm text-lg font-semibold"><MdAdd /> Add a Friend</div>
            </div>
        </div>
    );
};

export default Banner;
