import { WeatherIcons } from "../constants/weatherIcons";

type WeatherIconKey = keyof typeof WeatherIcons;

export interface IForecastWeather {
    dt: number,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        sea_level: number,
        grnd_level: number,
        humidity: number,
        temp_kf: number
    },
    weather: {
        id: number,
        main: string,
        description: string,
        icon: WeatherIconKey
    }[],
    clouds: {
        all: number
    },
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
    visibility: number,
    pop: number,
    rain: {
        "3h": number
    },
    sys: {
        pod: string
    },
    dt_txt: string

}

export interface IForecastData {
    cod: string,
    message: number,
    cnt: number,
    list: IForecastWeather[],
    city: {
        id: number,
        name: string,
        coord: {
            lat: number,
            lon: number
        },
        country: string,
        population: number,
        timezone: number,
        sunrise: number,
        sunset: number
    }
}