import React from 'react'
import { IWeatherData } from '../../types/weather'
import WeatherCardSkeleton from './skeleton'

interface WeatherCardProps {
    weatherData: IWeatherData | null
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
    if (!weatherData) {
        return <WeatherCardSkeleton />
    }

    const {
        name,
        main: { temp, temp_max, temp_min },
        weather,
    } = weatherData

    return (
        <div className='flex items-center justify-center flex-col w-full mt-20 mb-10'>
            <h2 className='text-2xl'>
                {name}
            </h2>

            <span className='text-5xl font-light'>{Math.ceil(temp)}°</span>

            <span className='value capitalize'>{weather?.[0]?.description}</span>

            <div className='flex gap-2'>
                <span className='value'>Máx.:{Math.ceil(temp_max)}°</span>
                <span className='value'>Mín.:{Math.ceil(temp_min)}°</span>
            </div>
        </div>

    )
}

export default WeatherCard