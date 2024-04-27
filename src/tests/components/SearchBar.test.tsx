import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "src/components/SearchBar";
import userEvent from "@testing-library/user-event";

describe("SearchBar", () => {

    const renderSearchBar = () => {
        const onChange = jest.fn();
        const onGeoLocate = jest.fn();
        render(<SearchBar onSearch={onChange} onGeoLocate={onGeoLocate} />);

        return {
            input: screen.getByPlaceholderText(/Buscar/i),
            onChange,
            user: userEvent.setup()
        };
    };

    it("should render an input field for searching", () => {
        const { input } = renderSearchBar();
    
        expect(input).toBeInTheDocument() 
    });

    it("should call onChange when Enter is pressed", async () => {
        const { input, onChange, user } = renderSearchBar();

        const searchTerm = "SearchTerm";
        await act(async () => { // Envolve a interação com `act()`
            await user.type(input, searchTerm + "{enter}");
        });
    
        expect(onChange).toHaveBeenCalledWith(searchTerm);
    });
});