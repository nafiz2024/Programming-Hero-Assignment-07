export const getDaysSinceContact = (lastContactDate) => {
    if (!lastContactDate) {
        return 0;
    }

    const contactDate = new Date(lastContactDate);
    const today = new Date();

    contactDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const timeDifference = today.getTime() - contactDate.getTime();

    return Math.max(0, Math.floor(timeDifference / millisecondsPerDay));
};

const TIMELINE_STORAGE_KEY = 'keen-keeper-timeline';
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

export const getValidTimelineItems = (items) => {
    const now = Date.now();

    return items.filter((item) => {
        if (!item.createdAt) {
            return false;
        }

        const createdAt = new Date(item.createdAt).getTime();

        return !Number.isNaN(createdAt) && now - createdAt < ONE_DAY_IN_MS;
    });
};

export const getStoredTimeline = () => {
    if (typeof window === 'undefined') {
        return [];
    }

    try {
        const storedTimeline = localStorage.getItem(TIMELINE_STORAGE_KEY);

        if (!storedTimeline) {
            return [];
        }

        const parsedTimeline = JSON.parse(storedTimeline);

        if (!Array.isArray(parsedTimeline)) {
            return [];
        }

        return getValidTimelineItems(parsedTimeline);
    } catch {
        return [];
    }
};

export const saveTimelineToStorage = (timeline) => {
    if (typeof window === 'undefined') {
        return;
    }

    localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(timeline));
};
