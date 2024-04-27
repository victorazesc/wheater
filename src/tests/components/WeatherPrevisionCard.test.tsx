import { render, screen } from "@testing-library/react";
import forecastData from "../mocks/forecastData.json"
import WeatherPrevisionCard from "src/components/WeatherPrevisionCard";

describe("WeatherPrevisionCard", () => {

    it("should render weather card", () => {
        render(<WeatherPrevisionCard weatherForecast={forecastData} />);
        expect(screen.getByText("20.93°")).toBeTruthy()
    });
});