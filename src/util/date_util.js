export const dateFormat = date => {
  
    const months = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec"
    }

    return `${months[date.getMonth() + 1]} ${date.getDate()}`;
}

export const timeFormat = date => {
    let hours = date.getHours();
    const minutes = date.getMinutes();

    if (hours === 0 && minutes === 0) return '12:00 AM';
    if (hours === 12 && minutes === 0) return '12:00 PM';

    if (hours > 12) {
        hours = hours - 12;
        if (minutes < 10) {
            return `${hours}:0${minutes} PM`
        } else {
            return `${hours}:${minutes} PM`
        }
    } else {
        if (minutes < 10) {
            return `${hours}:0${minutes} AM`
        } else {
            return `${hours}:${minutes} AM`
        }
    }
}