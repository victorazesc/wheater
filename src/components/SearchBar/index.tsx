import { MapPinned, Search } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { debounce } from 'lodash';
import { ModeToggle } from '../ModeToggle';
import { Button } from '../ui/button';

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
            <div className='flex items-center gap-2 border rounded-md p-1 pl-2'>
                <Search size={20} />
                <input
                    type='text'
                    placeholder='Buscar'
                    value={value}
                    className='p-1 outline-none border-none shadow-none dark:bg-slate-950 !px-0'
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div className='flex gap-2'>
                <Button onClick={handleGeoLocate} variant="outline" size="icon" className='border-input'>
                    <MapPinned className='h-[1.2rem] w-[1.2rem]' />
                    <span className="sr-only">Locate Me</span>
                </Button>
                <ModeToggle />
            </div>
        </div>
    );
};

export default SearchBar;
