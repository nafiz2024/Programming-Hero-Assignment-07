import React, { useContext, useState } from 'react';
import { BookContext } from '../../Context/Context';
import callIcon from '../../assets/call.png';
import textIcon from '../../assets/text.png';
import videoIcon from '../../assets/video.png';

const Timeline = () => {
    const { timeline } = useContext(BookContext);
    const [filterTimeline, setFilterTimeline] = useState('all');

    const getIcon = (type) => {
        if (type === 'call') {
            return <img src={callIcon} alt="Call" className="h-4 w-4" />;
        }

        if (type === 'text') {
            return <img src={textIcon} alt="Text" className="h-4 w-4" />;
        }

        if (type === 'video') {
            return <img src={videoIcon} alt="Video" className="h-4 w-4" />;
        }

        return <img src={textIcon} alt="Interaction" className="h-4 w-4" />;
    };

    const filteredTimeline = filterTimeline === 'all'
        ? timeline
        : timeline.filter((friend) => friend.type === filterTimeline);

    return (
        <div className="bg-[#F8FAFC] min-h-screen px-5 py-5 lg:px-0">
            <div className="container mx-auto flex flex-col gap-6 pb-8">
                <h1 className='text-5xl font-bold'>Timeline</h1>
                <div>
                    <select
                        value={filterTimeline}
                        onChange={(e) => setFilterTimeline(e.target.value)}
                        className="select border border-[#E7EDF3] bg-white text-sm text-[#64748B] focus:outline-none"
                    >
                        <option value="all">Filter timeline</option>
                        <option value="call">Call</option>
                        <option value="text">Text</option>
                        <option value="video">Video</option>
                    </select>
                </div>
            </div>
            <div className="container mx-auto space-y-6">
                {filteredTimeline.length > 0 ? filteredTimeline.map((friend) => (
                    <div
                        key={friend.id}
                        className="flex items-center gap-3 rounded-sm border border-[#E7EDF3] bg-white px-4 py-4 shadow-sm"
                    >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#DDE6EE] bg-[#F8FAFC]">
                            {getIcon(friend.type)}
                        </div>
                        <div className="min-w-0">
                            <h1 className="text-[13px] font-medium leading-none text-[#1E3A5F]">
                                {friend.title || friend.name}
                            </h1>
                            <p className="mt-2 text-[11px] leading-none text-[#8AA0BA]">
                                {friend.date || friend.displayDate || 'No date'}
                            </p>
                        </div>
                    </div>
                )) : (
                    <div className="rounded-sm border border-[#E7EDF3] bg-white px-4 py-6 text-sm text-[#64748B] shadow-sm">
                        {timeline.length === 0 ? 'No interactions yet.' : 'No matching interactions found.'}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;
