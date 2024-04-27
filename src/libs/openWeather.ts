import axios from 'axios'

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const getWeatherData = async (
    latitude: number,
    longitude: number,
    forecast?: boolean
): Promise<any> => {

    let apiUrl = `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=pt_br`
    if (forecast) {
        apiUrl = `${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=pt_br`
    }


    const response = await axios.get<any>(apiUrl)
    const data = response.data

    return data
}