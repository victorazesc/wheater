import { Search } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { debounce } from 'lodash';

interface SearchBarProps {
    onSearch: (query: string) => void;
    onGeoLocate: (scroll?: boolean) => Promise<void>
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onGeoLocate }) => {
    const [value, setValue] = useState('');


    const handleSearch = () => {
        onSearch(value);
    };

    const handleGeoLocate = () => {
        onGeoLocate();
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const debouncedSearch = useMemo(() => debounce(searchTerm => onSearch(searchTerm), 1000), [onSearch]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value: nextValue } = event.target;
        setValue(nextValue);
        debouncedSearch(nextValue);
    };

    return (
        <div className='p-4 flex gap-4 justify-between w-full'>
            <div className='flex items-center gap-2 border border-black rounded-md p-1 pl-2'>
                <Search size={20} />
                <input
                    type='text'
                    placeholder='Buscar'
                    value={value}
                    className='p-1 outline-none border-none shadow-none !px-0'
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
            </div>

            <button onClick={handleGeoLocate} className='border border-zinc-900 rounded-md pl-2 pr-2'>Usar minha Localização</button>
        </div>
    );
};

export default SearchBar;
