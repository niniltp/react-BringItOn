export function isPeriod(date, dateStart, dateEnd) {
    return date >= dateStart && date <= dateEnd;
}

export function isChristmasPeriod(date) {
    // Christmas dates
    const dateStart = new Date(date.getFullYear(), 10, 1);
    const dateEnd = new Date(date.getFullYear(), 11, 26);

    return isPeriod(date, dateStart, dateEnd);
}

export function isHalloweenPeriod(date) {
    // Halloween dates
    const dateStart= new Date(date.getFullYear(), 8, 15);
    const dateEnd = new Date(date.getFullYear(), 9, 15);

    return isPeriod(date, dateStart, dateEnd);
}

export function isValentinePeriod(date) {
    // Valentine's day dates
    const dateStart = new Date(date.getFullYear(), 8, 15);
    const dateEnd = new Date(date.getFullYear(), 9, 15);

    return isPeriod(date, dateStart, dateEnd);
}

export function isNewYearPeriod(date) {
    // New year's eve dates
    const dateStart = new Date(date.getFullYear(), 0, 10);
    const dateEnd = new Date(date.getFullYear(), 0, 17);

    return isPeriod(date, dateStart, dateEnd);
}

export function isWinterPeriod(date) {
    const dateStart = new Date(date.getFullYear(), 10, 15);
    const dateEnd = new Date(date.getFullYear(), 11, 31);
    const dateStart2 = new Date(date.getFullYear(), 0, 1);
    const dateEnd2 = new Date(date.getFullYear(), 1, 20);

    return isPeriod(date, dateStart, dateEnd) || isPeriod(date, dateStart2, dateEnd2);
}

export function isNightTime(hours) {
    const hourStart = 19;
    const hourEnd = 23;
    const hourStart2 = 0;
    const hourEnd2 = 5;

    return isPeriod(hours, hourStart, hourEnd) || isPeriod(hours, hourStart2, hourEnd2);
}