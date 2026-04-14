import React from 'react';
import { BsChatLeftText } from 'react-icons/bs';
import { IoArchiveOutline } from 'react-icons/io5';
import { LuPhoneCall, LuVideo } from 'react-icons/lu';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

const FriendsDetails = () => {
    const { id } = useParams();
    const friends = useLoaderData();

    const expectedFriend = friends.find((friend) => friend.id === id);

    if (!expectedFriend) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center shadow-sm">
                    <h1 className="text-2xl font-semibold text-[#1F2937]">Friend not found</h1>
                    <p className="mt-2 text-[#64748B]">This profile is not available in the current data.</p>
                </div>
            </div>
        );
    }

    const {
        avatar,
        name,
        status,
        tag,
        note,
        preferredContact,
        daysSinceContact,
        goalDays,
        nextDueDate,
    } = expectedFriend;

    const formattedDate = new Date(nextDueDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

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

    const callBtn = (name) => {
        toast.success(`Call With ${name}`, {
            position: "top-center"
        })
    };

    const textBtn = (name) => {
        toast.success(`Text With ${name}`, {
            position: "top-center"
        })
    };

    const videoBtn = (name) => {
        toast.success(`Video With ${name}`, {
            position: "top-center"
        })
    };

    return (
        <div className="container mx-auto px-5 lg:px-0 py-20">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[304px_minmax(0,1fr)]">
                <div className="space-y-4">
                    <div className="rounded-2xl border border-[#EEF2F6] bg-white p-6 text-center shadow-sm">
                        <img src={avatar} alt={name} className="mx-auto h-16 w-16 rounded-full object-cover" />
                        <h1 className="mt-4 text-[18px] font-semibold text-[#1F2937]">{name}</h1>
                        <div className="mt-3 space-y-2">
                            <p
                                className={`mx-auto w-fit rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusStyles[status] || 'bg-slate-500 text-white'
                                    }`}
                            >
                                {status}
                            </p>
                            <p
                                className={`mx-auto w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase ${tagStyles[tag] || 'bg-slate-100 text-slate-700'
                                    }`}
                            >
                                {tag}
                            </p>
                        </div>
                        <p className="mt-4 text-[15px] italic text-[#64748B]">"{note}"</p>
                        <p className="mt-2 text-[15px] text-[#64748B]">Preferred: {preferredContact}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button className='flex items-center justify-center gap-2 w-full text-lg font-medium py-4 border-2 border-[#E9E9E9] rounded-sm bg-white '>
                            <RiNotificationSnoozeLine /> Snooze 2 Weeks
                        </button>
                        <button className='flex items-center justify-center gap-2 w-full text-lg font-medium py-4 border-2 border-[#E9E9E9] rounded-sm bg-white '>
                            <IoArchiveOutline /> Archive
                        </button>
                        <button className='flex items-center justify-center gap-2 w-full text-lg text-[#EF4444] font-medium py-4 border-2 border-[#E9E9E9] rounded-sm bg-white '>
                            <RiDeleteBinLine /> Delete
                        </button>
                    </div>

                </div>

                <div className="space-y-5">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-[#EEF2F6] bg-white p-7 text-center shadow-sm">
                            <h2 className="text-[28px] font-semibold text-[#244D3F]">{daysSinceContact}</h2>
                            <p className="mt-1 text-lg text-[#64748B]">Days Since Contact</p>
                        </div>
                        <div className="rounded-2xl border border-[#EEF2F6] bg-white p-7 text-center shadow-sm">
                            <h2 className="text-[28px] font-semibold text-[#244D3F]">{goalDays}</h2>
                            <p className="mt-1 text-lg text-[#64748B]">Goal (Days)</p>
                        </div>
                        <div className="rounded-2xl border border-[#EEF2F6] bg-white p-7 text-center shadow-sm">
                            <h2 className="text-[28px] font-semibold text-[#244D3F]">{formattedDate}</h2>
                            <p className="mt-1 text-lg text-[#64748B]">Next Due</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[#EEF2F6] bg-white p-6 shadow-sm">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h2 className="text-[18px] font-semibold text-[#244D3F]">Relationship Goal</h2>
                                <p className="mt-4 text-[16px] text-[#64748B]">
                                    Connect every <span className="font-semibold text-[#1F2937]">{goalDays} days</span>
                                </p>
                            </div>
                            <button className="btn">
                                Edit
                            </button>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[#EEF2F6] bg-white p-6 shadow-sm">
                        <h2 className="flex items-center gap-2 text-[18px] font-semibold text-[#244D3F]">
                            Quick Check-In
                        </h2>
                        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
                            <div className="">
                                <button onClick={() => callBtn(name)} className='bg-[#F8FAFC] border border-[#E9E9E9] flex flex-col items-center justify-center gap-2 w-full p-5 text-2xl rounded-lg'>
                                    <LuPhoneCall className='text-4xl' /> Call
                                </button>
                            </div>
                            <div className="">
                                <button onClick={() => textBtn(name)} className='bg-[#F8FAFC] border border-[#E9E9E9] flex flex-col items-center justify-center gap-2 w-full p-5 text-2xl rounded-lg'>
                                    <BsChatLeftText className='text-4xl' /> Text
                                </button>
                            </div>
                            <div className="">
                                <button onClick={() => videoBtn(name)} className='bg-[#F8FAFC] border border-[#E9E9E9] flex flex-col items-center justify-center gap-2 w-full p-5 text-2xl rounded-lg'>
                                    <LuVideo className='text-4xl' /> Video
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;
