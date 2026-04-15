import React from 'react';
import Banner from '../../Components/HomePage/Banner';
import AllFriends from '../../Components/HomePage/AllFriends';

const Homepage = () => {
    return (
        // Home page combines the hero banner and the friends overview grid.
        <div className='bg-[#F8FAFC] min-h-screen pt-20 px-5 lg:px-0'>
            <Banner />
            <AllFriends />
        </div>
    );
};

export default Homepage;
