import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
    getStoredTimeline,
    getValidTimelineItems,
    saveTimelineToStorage,
} from '../utils/dateUtils';

export const BookContext = createContext();

const FriendProvider = ({ children }) => {

    const [timeline, setTimeline] = useState(() => getStoredTimeline());

    useEffect(() => {
        const validTimeline = getValidTimelineItems(timeline);

        if (validTimeline.length !== timeline.length) {
            setTimeline(validTimeline);
            return;
        }

        saveTimelineToStorage(validTimeline);
    }, [timeline]);

    const handleInteraction = (expectedFriend, type) => {
        const now = new Date();
        const labelMap = {
            call: 'Call',
            text: 'Text',
            video: 'Video',
        };
        const subtitleMap = {
            call: 'Had a quick phone check-in',
            text: 'Sent a thoughtful message',
            video: 'Shared a face-to-face catch-up',
        };

        const timelineItem = {
            id: `${expectedFriend.id}-${type}-${now.getTime()}`,
            friendId: expectedFriend.id,
            name: expectedFriend.name,
            type,
            title: `${labelMap[type]} with ${expectedFriend.name}`,
            subtitle: subtitleMap[type],
            createdAt: now.toISOString(),
            date: now.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            }),
        };

        setTimeline((prev) => [timelineItem, ...prev])
        toast.success(`${labelMap[type]} With ${expectedFriend.name}`, {
            position: "top-center"
        })
    };

    const data = {
        handleInteraction,
        timeline
    };


    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider> 
};

export default FriendProvider;
