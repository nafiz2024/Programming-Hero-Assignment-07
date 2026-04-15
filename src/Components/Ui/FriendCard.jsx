import React from 'react';
import { Link } from 'react-router';
import { getDaysSinceContact } from '../../utils/dateUtils';

const FriendCard = ({ friend }) => {

    // Read the display fields we need for each friend card.
    const { name, avatar, lastContactDate, tag, status } = friend;
    const daysSinceContact = getDaysSinceContact(lastContactDate);

    // Badge colors for relationship status.
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
        // Each card links to that friend's details page.
        <Link to={`/friendsdetails/${friend.id}`} className='interactive-card group block rounded-2xl border border-[#EEF2F6] bg-white p-6 text-center shadow-sm'>
            <div className="pb-3">
                <img src={avatar} alt={name} className='mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-white transition duration-300 group-hover:scale-105 group-hover:ring-[#DDFCE7]' />
            </div>
            <div className="space-y-2">
                <h1 className='text-xl font-semibold transition-colors duration-200 group-hover:text-[#244D3F]'>{name}</h1>
                <p className='text-[12px] text-[#64748B]'>{daysSinceContact}d ago</p>
                <p className={`mx-auto block w-fit rounded-full px-3 py-1 text-[12px] font-medium uppercase text-[#244D3F] shadow-sm transition duration-200 group-hover:scale-105 group-hover:shadow-md ${tagStyles[tag]}`}>{tag}</p>
                <p className={`mx-auto block w-fit rounded-full px-3 py-1 text-[12px] font-medium uppercase text-white shadow-sm transition duration-200 group-hover:scale-105 group-hover:shadow-md ${statusStyles[status]}`}>{status}</p>
            </div>
        </Link>
    );
};

export default FriendCard;
