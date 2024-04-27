import { render, screen } from "@testing-library/react";
import WeatherCard from "src/components/WeatherCard";
import weatherData from "../mocks/weatherData.json"

describe("WeatherCard", () => {

    it("should render weather card", () => {
        render(<WeatherCard weatherData={weatherData} />);
        expect(screen.getByText("Balneário Camboriú")).toBeTruthy()
        expect(screen.getByText("25°")).toBeTruthy()
        expect(screen.getByText("nublado")).toBeTruthy()
    });
    it("should render a skeleton", () => {
        render(<WeatherCard weatherData={null} />);
        expect(screen.getAllByTestId("weather-card-skeleton")).toBeTruthy()
    });
});