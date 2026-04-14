import React from 'react';

const FriendCard = ({ friend }) => {

    const { name, avatar, daysSinceContact, tag, status } = friend;

    return (
        <div className='p-6 bg-white rounded-lg shadow-sm text-center'>
            <div className="pb-3">
                <img src={avatar} alt={name} className='w-20 h-20 rounded-full mx-auto' />
            </div>
            <div className="space-y-2">
                <h1 className='text-xl font-semibold'>{name}</h1>
                <p className='text-[12px] text-[#64748B]'>{daysSinceContact}d ago</p>
                <p className='block w-fit mx-auto uppercase text-[12px] text-[#244D3F] font-medium bg-[#CBFADB] rounded-full px-3 py-1'>{tag}</p>
                <p className='block w-fit mx-auto uppercase text-[12px] font-medium text-white bg-[#EFAD44] rounded-full px-3 py-1'>{status}</p>
            </div>
        </div>
    );
};

export default FriendCard;
