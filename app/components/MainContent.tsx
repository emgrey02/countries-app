'use client'
import { useState } from "react";
import { CountryCards } from "./CountryCards"
import { CountryInfo } from "./CountryInfo";
import { Country } from "../types";
import { SearchBar } from "./SearchBar";
import { RegionFilter } from "./RegionFilter";
import './transitions.css'; // Import the CSS file for transitions

export const MainContent = (props: {allCountries: Country[]}) => {
    const [selectedCountry, setSelectedCountry] = useState<null | Country>(null);
    const [results, setResults] = useState(props.allCountries);
    const [isTransitioning, setIsTransitioning] = useState(false);
 
    const setSelectedRegion = (region: string) => {
        const selectedRegion = props.allCountries.filter((country: Country) => country.region === region);
        setResults(selectedRegion);
    }

    const setSearchResults = (res: string) => {
        const searchResults = props.allCountries.filter((country: Country) => country.name.common.toLowerCase().includes(res.toLowerCase()));
        setResults(searchResults);
    }

    const setCountry = (countryName: string) => {
        const clickedCountry = props.allCountries.filter((country: Country) => countryName === country.name.common);
        setSelectedCountry(clickedCountry[0]);
    }

    const goBack = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setSelectedCountry(null);
            setResults(props.allCountries);
            setIsTransitioning(false);
        }, 200); // Match the duration of the CSS transition
    }
    
    return (
        <div className='grid gap-8 px-8 py-8'>
            <div className={`transition-opacity duration-200 delay-200 ${selectedCountry && !isTransitioning ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                {!selectedCountry && (
                    <>
                        <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-4 '>
                            <SearchBar setSearch={setSearchResults} />
                            <div className='flex bg-transparent dark:bg-secondary w-fit rounded-sm sm:mt-8 mb-8 '>
                                <RegionFilter setSelectedRegion={setSelectedRegion}/>
                            </div>
                        </div>
                        <div className=''>
                            <CountryCards countries={results} setCountry={setCountry}/>
                        </div>
                    </>
                )}
            </div>
            <div className={`transition-opacity duration-200 delay-200 ${selectedCountry && !isTransitioning ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {selectedCountry && (
                    <CountryInfo country={selectedCountry} goBack={goBack}/>
                )}
            </div>
        </div>
    )
}