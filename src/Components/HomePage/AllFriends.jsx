import React, { use } from 'react';
import FriendCard from '../Ui/FriendCard';

const friendsPromise = fetch("/FriendsData.json").then((res) => res.json());

const AllFriends = () => {

    const friends = use(friendsPromise);
    console.log(friends);

    return (
        <div className='container mx-auto space-y-10 pb-20'>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 border-b border-[#E9E9E9] pb-10">
                <div className="p-8 bg-white rounded-lg shadow-sm text-center">
                    <h1 className='text-[#244D3F] text-[32px] font-semibold'>12</h1>
                    <p className='text-[#64748B] text-lg'>Total Friends</p>
                </div>
                <div className="p-8 bg-white rounded-lg shadow-sm text-center">
                    <h1 className='text-[#244D3F] text-[32px] font-semibold'>3</h1>
                    <p className='text-[#64748B] text-lg'>On Track</p>
                </div>
                <div className="p-8 bg-white rounded-lg shadow-sm text-center">
                    <h1 className='text-[#244D3F] text-[32px] font-semibold'>6</h1>
                    <p className='text-[#64748B] text-lg'>Need Attention</p>
                </div>
                <div className="p-8 bg-white rounded-lg shadow-sm text-center">
                    <h1 className='text-[#244D3F] text-[32px] font-semibold'>12</h1>
                    <p className='text-[#64748B] text-lg'>Interactions This Month</p>
                </div>
            </div>
            <div className="space-y-4">
                <h1 className='text-2xl font-semibold'>Your Friends</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        friends.map((friend) => (
                            <FriendCard key={friend.id} friend={friend} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFriends;


