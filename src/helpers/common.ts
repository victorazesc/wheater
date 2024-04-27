export function convertTimeStampToHourAndMinute(timestamp: number): string {
    const date: Date = new Date(timestamp * 1000);

    const hour: number = date.getHours();
    const minute: number = date.getMinutes();

    const formattedTime: string = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

    return formattedTime;
}

export const getHours = (date: string) => {
    let hour = new Date(date).getHours();
    let formattedHour = hour < 10 ? '0' + hour : hour;
    return formattedHour as string
}


export function mpsToKmph(mps: number) {
    // 1 m/s = 3.6 km/h
    return mps * 3.6;
}