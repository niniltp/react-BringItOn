export function convertMinutesToTime(timeInMinutes) {
    let hours, minutes;

    hours = Math.floor(timeInMinutes / 60);
    minutes = timeInMinutes % 60;

    return {
        hours: hours,
        minutes: minutes
    }
}