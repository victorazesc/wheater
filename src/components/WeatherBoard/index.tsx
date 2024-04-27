import React from 'react'
import ForecastCard from '../ForecastCard'
import { IForecastData } from '../../types/forecast'
import { IWeatherData } from '../../types/weather'
import WidgetCard from '../WidgetCard'
import { CircleGauge, Droplet, Eye, Github, Sunrise, Thermometer, Wind } from 'lucide-react'
import { convertTimeStampToHourAndMinute, mpsToKmph } from '../../helpers/common'
import WeatherPrevisionCard from '../WeatherPrevisionCard'
import WeatherBoardSkeleton from './skeleton'

interface WeatherBoardProps {
    weatherForecast: IForecastData | null
    weatherData: IWeatherData | null
}

const WeatherBoard: React.FC<WeatherBoardProps> = ({ weatherForecast, weatherData }) => {

    if (!weatherForecast || !weatherData) {
        return <WeatherBoardSkeleton />
    }

    return (
        <div className='flex items-center justify-center flex-col gap-4 mt-12 mb-12 pl-4 pr-4 w-full'>
            <div className='flex flex-col md:flex-row w-full gap-4'>
                <div className='w-full md:w-96 flex-1 h-32' data-testid="forecast-card">
                    <ForecastCard weatherForecast={weatherForecast} />
                </div>
                <div className='h-32 w-32 hidden md:flex' data-testid="feels-like-card"><WidgetCard  TitleIcon={Thermometer} title={"Sensação"} content={`${Math.ceil(weatherData.main.feels_like)}°`} footer={`A humidade pode afetar a sensação térmica`} /></div>
            </div>
            <div className='flex flex-col md:flex-row w-full gap-4'>
                <div className='w-full'data-testid="weather-prevision-card"><WeatherPrevisionCard weatherForecast={weatherForecast} /></div>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <div className='h-32 w-full md:w-32 flex md:hidden'><WidgetCard TitleIcon={Thermometer} title={"Sensação"} content={`${Math.ceil(weatherData.main.feels_like)}°`} footer={`A humidade pode afetar a sensação térmica`} /></div>
                        <div className='h-32 w-full md:w-32'><WidgetCard TitleIcon={CircleGauge} title={"Pressão"} content={
                            <div className='flex flex-col'>
                                <span>{weatherData.main.pressure}</span>
                                <span className='text-sm text-center'>mbar</span>
                            </div>
                        } /></div>
                        <div className='h-32 w-full md:w-32'><WidgetCard TitleIcon={Droplet} title={"Umidade"} content={`${weatherData.main.humidity}%`} /></div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='h-32 w-full md:w-32'><WidgetCard TitleIcon={Eye} title={"Visibilidade"} content={weatherData.visibility > 1000 ? `${weatherData.visibility / 1000} km` : weatherData.visibility < 1000 ? `${weatherData.visibility < 1000}m` : "-"} /></div>
                        <div className='h-32 w-full md:w-32'><WidgetCard TitleIcon={Sunrise} title={"Nascer do sol"} content={convertTimeStampToHourAndMinute(weatherData.sys.sunrise)} footer={`Pôr do sol: ${convertTimeStampToHourAndMinute(weatherData.sys.sunset)}`} /></div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='h-32 w-full md:w-32'><WidgetCard TitleIcon={Wind} title={"Vento"} content={`${mpsToKmph(weatherData.wind.speed).toFixed()} km/h`} /></div>
                        <div className='h-32 w-full md:w-32'><WidgetCard url={"https://github.com/victorazesc"} title={"GitHub"} content={<Github size={50} />} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherBoard