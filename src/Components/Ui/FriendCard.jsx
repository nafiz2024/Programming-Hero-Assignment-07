import React from 'react';
import { Link } from 'react-router';
import { getDaysSinceContact } from '../../utils/dateUtils';

const FriendCard = ({ friend }) => {

    const { name, avatar, lastContactDate, tag, status } = friend;
    const daysSinceContact = getDaysSinceContact(lastContactDate);

    const statusStyles = {
        overdue: 'bg-[#FE4A49] text-white',
        'almost due': 'bg-[#F59E0B] text-white',
        'on-track': 'bg-[#22C55E] text-white',
    };

    const tagStyles = {
        family: 'bg-[#DDFCE7] text-[#2F6E53]',
        work: 'bg-[#DBEAFE] text-[#1D4ED8]',
        hobby: 'bg-[#FEF3C7] text-[#B45309]',
    };

    return (
        <Link to={`/friendsdetails/${friend.id}`} className='p-6 bg-white rounded-lg shadow-sm text-center'>
            <div className="pb-3">
                <img src={avatar} alt={name} className='w-20 h-20 rounded-full mx-auto' />
            </div>
            <div className="space-y-2">
                <h1 className='text-xl font-semibold'>{name}</h1>
                <p className='text-[12px] text-[#64748B]'>{daysSinceContact}d ago</p>
                <p className={`block w-fit mx-auto uppercase text-[12px] text-[#244D3F] font-medium ${tagStyles[tag]} rounded-full px-3 py-1`}>{tag}</p>
                <p className={`block w-fit mx-auto uppercase text-[12px] font-medium text-white ${statusStyles[status]} rounded-full px-3 py-1`}>{status}</p>
            </div>
        </Link>
    );
};

export default FriendCard;
