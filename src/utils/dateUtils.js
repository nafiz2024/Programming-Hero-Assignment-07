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
