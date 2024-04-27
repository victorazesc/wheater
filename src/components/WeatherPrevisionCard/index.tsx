import React, { useEffect, useState } from 'react'
import { IForecastData, IForecastWeather } from '../../types/forecast'
import { WeatherIcons } from '../../constants/weatherIcons'

interface WeatherPrevisionCardProps {
    weatherForecast: IForecastData | null
}

interface ProcessedWeatherData { day: string, minTemp: number, maxTemp: number, icon: keyof typeof WeatherIcons }

function WeatherPrevisionCard({ weatherForecast }: WeatherPrevisionCardProps) {
    const [processedData, setProcessedData] = useState<ProcessedWeatherData[]>([])

    useEffect(() => {
        if (weatherForecast) {
            const weatherList: IForecastWeather[] = weatherForecast.list;
            const processedData: any = processWeatherData(weatherList);
            setProcessedData(processedData)
        }
    }, [weatherForecast])

    if (!weatherForecast) {
        return null
    }

    function processWeatherData(weatherData: IForecastWeather[]) {
        const dailyData: any = {};

        weatherData.forEach(item => {
            const date = new Date(item.dt * 1000);
            const day = date.toLocaleString('pt-BR', { weekday: 'short' });

            if (!dailyData[day]) {
                dailyData[day] = {
                    day: day,
                    minTemp: Number.MAX_VALUE,
                    maxTemp: Number.MIN_VALUE,
                    icon: ''
                };
            }

            const main = item.main;
            dailyData[day].minTemp = Math.min(dailyData[day].minTemp, main.temp_min);
            dailyData[day].maxTemp = Math.max(dailyData[day].maxTemp, main.temp_max);

            if (item.weather && item.weather.length > 0) {
                dailyData[day].icon = item.weather[0].icon;
            }
        });

        const dailyArray = Object.values(dailyData);

        return dailyArray
    }


    return (
        <div className='border p-2 rounded-md h-full'>
            <span className='text-sm'>Previsão para os próximos dias</span>
            <div className='w-full h-px bg-black'></div>
            <div className='flex gap-2 flex-col mt-2'>
                {
                    processedData.map((item) => {
                        type WeatherIconKey = keyof typeof WeatherIcons;
                        const weatherIcon: WeatherIconKey = item.icon ?? "default";
                        const IconComponent: React.ComponentType<any> = WeatherIcons[weatherIcon];
                        return (
                            <div className='flex items-center gap-4 justify-around mt-2' key={Math.random()}>
                                <span className='w-10'>{item.day}</span>
                                <span className='w-8'>{<IconComponent />}</span>
                                <span className='w-16'>{item.maxTemp}°</span>
                                <span className='w-16'>{item.minTemp}°</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default WeatherPrevisionCard