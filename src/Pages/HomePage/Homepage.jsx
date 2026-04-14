import React from 'react';
import Banner from '../../Components/HomePage/Banner';
import AllFriends from '../../Components/HomePage/AllFriends';

const Homepage = () => {
    return (
        <div className='bg-[#F8FAFC] h-screen pt-20 px-5 lg:px-0'>
            <Banner />
            <AllFriends />
        </div>
    );
};

export default Homepage;