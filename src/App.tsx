import React, { useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import { getCityLocation } from './libs/googleMaps'
import { getGeoLocation } from './libs/geoLocation'
import { getWeatherData } from './libs/openWeather'
import WeatherBoard from './components/WeatherBoard'
import { Toaster, toast } from 'sonner'

function App() {
  const [location, setLocation] = React.useState({
    latitude: 0,
    longitude: 0,
  })

  const [weatherData, setWeatherData] = React.useState(null)
  const [foreCastData, setForeCastData] = React.useState(null)

  const searchLocation = (query: string) => {
    getCityLocation(query)
      .then((data) => {
        setLocation(data)
      })
      .catch((error) => {
        console.error(error);
        toast.error("Oops!", {
          description: "Não conseguimos encontrar sua localização, tente novamente"
        })
      })
  }

  const geoLocate = async () => {
    getGeoLocation()
      .then((data) => {
        console.log(data)
        setLocation(data)
      })
      .catch((error) => {
        console.error(error);
        toast.error("Oops!", {
          description: "Não conseguimos encontrar sua localização, tente novamente"
        })
      })
  }

  useEffect(() => {
    if (location.latitude === 0 && location.longitude === 0) return

    getWeatherData(location.latitude, location.longitude)
      .then((data) => {
        setWeatherData(data)
      })
      .catch((error) => {
        console.error(error);
        toast.error("Oops!", {
          description: "Não conseguimos encontrar dados de sua localização, tente novamente"
        })
      })
    getWeatherData(location.latitude, location.longitude, true)
      .then((data) => {
        setForeCastData(data)
      })
      .catch((error) => {
        console.error(error);
        toast.error("Oops!", {
          description: "Não conseguimos encontrar dados de sua localização, tente novamente"
        })
      })
  }, [location])

  useEffect(() => {
    geoLocate()
  }, [])

  return (
    <div className='app'>
      <div className='flex items-center justify-center flex-col max-w-screen-md w-full mx-auto'>
        <header className='w-full flex justify-end'>
          <SearchBar
            onSearch={searchLocation}
            onGeoLocate={geoLocate}
          />
        </header>
        <main className='w-full'>
          <WeatherCard weatherData={weatherData} />
          <WeatherBoard weatherForecast={foreCastData} weatherData={weatherData} />
          <Toaster richColors position='top-center' />
        </main>
      </div>
    </div>
  )
}

export default App