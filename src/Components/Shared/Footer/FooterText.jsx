import React from 'react';

const FooterText = () => {
    return (
        <div className='container mx-auto my-8 text-[#FAFAFA]/50 flex flex-col lg:flex-row justify-between gap-4 px-5 lg:px-0 text-center'>
            <h1>© 2026 KeenKeeper. All rights reserved.</h1>
            <div className="space-x-5 lg:space-x-10">
                <a href="" className='hover:text-[#fafafa]'>Privacy Policy</a>
                <a href="" className='hover:text-[#fafafa]'>Terms of Service</a>
                <a href="" className='hover:text-[#fafafa]'>Cookies</a>
            </div>
        </div>
    );
};

export default FooterText;