import { render, screen } from "@testing-library/react";
import WeatherCard from "src/components/WeatherCard";
import weatherData from "../mocks/weatherData.json"
import weatherDatweatherForecasta from "../mocks/forecastData.json"
import WeatherBoard from "src/components/WeatherBoard";

describe("WeatherBoard", () => {

    it("should render weather card", () => {
        render(<WeatherBoard weatherForecast={weatherDatweatherForecasta} weatherData={weatherData} />);
        expect(screen.getAllByTestId("forecast-card")).toBeTruthy()
        expect(screen.getAllByTestId("feels-like-card")).toBeTruthy()
        expect(screen.getAllByTestId("weather-prevision-card")).toBeTruthy()
    });
    it("should render a skeleton", () => {
        render(<WeatherCard weatherData={null} />);
        expect(screen.getAllByTestId("weather-card-skeleton")).toBeTruthy()
    });
});