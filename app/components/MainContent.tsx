'use client'
import { useEffect, useState } from "react";
import { CountryCards } from "./CountryCards"
import { Country } from "../types";
import { SearchBar } from "./SearchBar";
import { RegionFilter } from "./RegionFilter";
import './transitions.css'; // Import the CSS file for transitions

export const MainContent = (props: {allCountries: Country[]}) => {
    const [results, setResults] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('Initial countries:', props.allCountries);
        setResults(props.allCountries); 
        setIsLoading(false);
    }, [props.allCountries]);
 
    const setSelectedRegion = (region: string) => {
        if (region === 'No Filter') {
            setResults(props.allCountries); 
            return;
        }
        const selectedRegion = props.allCountries.filter((country: Country) => country.region === region);
        setResults(selectedRegion);
    }

    const setSearchResults = (res: string) => {
        const searchResults = props.allCountries.filter((country: Country) => country.name.common.toLowerCase().includes(res.toLowerCase()));
        setResults(searchResults);
    }
    
    return (
        <div className='grid gap-8 px-8 py-8'>
            <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-4 '>
                <SearchBar setSearch={setSearchResults} />
                <div className='flex bg-transparent dark:bg-secondary w-fit rounded-sm sm:mt-8 mb-8 '>
                    <RegionFilter setSelectedRegion={setSelectedRegion}/>
                </div>
            </div>
            <div className=''>
                <CountryCards countries={results} isLoading={isLoading}/>
            </div>
        </div>
    )
}