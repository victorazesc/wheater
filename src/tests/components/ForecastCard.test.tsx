import { render, screen } from "@testing-library/react";
import weatherDatweatherForecasta from "../mocks/forecastData.json"
import ForecastCard from "src/components/ForecastCard";

describe("ForecastCard", () => {

    it("should render forecast card", () => {
        render(<ForecastCard weatherForecast={weatherDatweatherForecasta} />);
        expect(screen.getAllByTestId("test-before-sunrise")).toBeTruthy()
        expect(screen.getAllByTestId("test-before-sunrise").length).toBe(6)
        expect(screen.getAllByTestId("test-after-sunrise").length).toBe(6)
    });
});