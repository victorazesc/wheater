import WidgetCard from "src/components/WidgetCard";
import { render, screen } from "@testing-library/react";

describe("WidgetCard", () => {

    it("should render widget card", () => {
        render(<WidgetCard title={"Some Title"} content={"some Content"} />);
        expect(screen.getByText("Some Title")).toBeTruthy()
        expect(screen.getByText("some Content")).toBeTruthy()
    });
});