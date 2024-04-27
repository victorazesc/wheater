import { Sunrise } from 'lucide-react'
import React from 'react'
import { IForecastData } from '../../types/forecast'
import { WeatherIcons } from '../../constants/weatherIcons'
import { convertTimeStampToHourAndMinute } from '../../helpers/common'

interface ForecastCardProps {
    weatherForecast: IForecastData | null
}

const ForecastCard: React.FC<ForecastCardProps> = ({ weatherForecast }) => {

    const getHours = (date: string) => {
        let hour = new Date(date).getHours();
        let formattedHour = hour < 10 ? '0' + hour : hour;
        return formattedHour as string
    }

    function compareTimes(time: string, sunriseTime: string) {
        const hour1 = Number(time);
        const [hour2, minute2] = sunriseTime.split(":").map(Number);
        if (hour1 > hour2) {
            return 1;
        } else if (hour1 < hour2) {
            return -1;
        } else {
            if (minute2 === undefined) {
                return 0;
            } else {
                return minute2 < 0 ? 1 : 0;
            }
        }
    }

    if (!weatherForecast) {
        return null
    }

    const {
        list,
        city
    } = weatherForecast

    return (
        <div className='border p-2 rounded-md h-32'>
            <span className='text-sm'>Previsão de temperaturas para hoje</span>
            <div className='w-full h-px bg-black'></div>
            <div className='flex gap-2 w-full justify-around mt-2'>

                {
                    list.slice(0, 6).map((item) => {
                        type WeatherIconKey = keyof typeof WeatherIcons;
                        const weatherIcon: WeatherIconKey = item.weather[0]?.icon ?? "default";
                        const IconComponent: React.ComponentType<any> = WeatherIcons[weatherIcon];
                        return (
                            <>
                                {!compareTimes(getHours(item.dt_txt), convertTimeStampToHourAndMinute(city.sunrise)) &&
                                    <div key={item.dt} className='flex flex-col items-center'>
                                        <span>{getHours(item.dt_txt)}</span>
                                        <span>{<IconComponent />}</span>
                                        <span>{Math.ceil(item.main.temp)}°</span>
                                    </div>
                                }
                            </>
                        )
                    })
                }
                <div className='flex flex-col items-center'>
                    <span> {convertTimeStampToHourAndMinute(city.sunrise)}</span>
                    <span><Sunrise /></span>
                    <span>Nascer do Sol</span>
                </div>
                {
                    list.slice(0, 6).map((item) => {
                        type WeatherIconKey = keyof typeof WeatherIcons;

                        const weatherIcon: WeatherIconKey = item.weather[0]?.icon ?? "default";

                        const IconComponent: React.ComponentType<any> = WeatherIcons[weatherIcon];
                        return (
                            <>
                                {compareTimes(getHours(item.dt_txt), convertTimeStampToHourAndMinute(city.sunrise)) === 1 &&
                                    <div className='flex flex-col items-center'>
                                        <span>{getHours(item.dt_txt)}</span>
                                        <span>{<IconComponent />}</span>
                                        <span>{Math.ceil(item.main.temp)}°</span>
                                    </div>
                                }
                            </>
                        )
                    })
                }

            </div>
        </div>

    )
}

export default ForecastCard