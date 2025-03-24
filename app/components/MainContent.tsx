'use client'
import { useEffect, useState } from "react";
import { CountryCards } from "./CountryCards"
import { Search } from "@deemlol/next-icons";
import { ChevronDown } from "@deemlol/next-icons"; 
import { useTheme } from "next-themes";
import { CountryInfo } from "./CountryInfo";
import { Country } from "../types";

export const MainContent = (props: {allCountries: Country[]}) => {
    const { theme } = useTheme();
    const [selectedRegion, setSelectedRegion] = useState('No Filter');
    const [selectedCountry, setSelectedCountry] = useState<null | Country>(null);
    const [results, setResults] = useState(props.allCountries);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=> {
        if (selectedRegion !== 'No Filter') {
            const res = props.allCountries.filter((country: Country) => country.region === selectedRegion);
            setResults(res);
        }
    }, [selectedRegion, props.allCountries])

    const setCountry = (countryName: string) => {
        const clickedCountry = props.allCountries.filter((country: Country) => countryName === country.name.common);
        setSelectedCountry(clickedCountry[0]);
    }

    const goBack = () => {
        console.log('going back')
        setSelectedCountry(null);
    }

    const black = '#000000';
    const white = '#FFFFFF';
    

    return (
        <>
            <form className='flex gap-8 bg-transparent dark:bg-secondary m-4 mt-8 rounded-sm shadow-sm p-1'>
                <div className='ps-4 py-2'>
                    <Search size={24} color={theme == 'light' ? black : white} />
                </div>
                <input className='px-4 w-full' placeholder='Search for a country...' type="text" name="search" id="search" />
                <label className='hidden' htmlFor="search">Search for a country...</label>
            </form>
            <div className='flex bg-transparent dark:bg-secondary w-fit rounded-sm ms-4 mb-8'>
                <label className='hidden' htmlFor="filter">Filter by Region</label>
                <div className='w-full grid grid-cols-1 rounded-sm px-2 py-1 cursor-pointer bg-transparent dark:bg-secondary shadow-sm' >
                    <select className='col-start-1 row-start-1 appearance-none border-none w-full outline-none px-2 py-1 me-8 z-20 cursor-pointer' name="filter" id="filter" onClick={()=> setIsOpen(!isOpen)} value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
                        <option className='dark:bg-secondary' value='No Filter' onClick={()=> setIsOpen(!isOpen)}>Filter by Region</option>
                        <option className='dark:bg-secondary' value="Africa" onClick={()=> setIsOpen(!isOpen)}>Africa</option>
                        <option className='dark:bg-secondary' value="Americas" onClick={()=> setIsOpen(!isOpen)}>America</option>
                        <option className='dark:bg-secondary' value="Asia" onClick={()=> setIsOpen(!isOpen)}>Asia</option>
                        <option className='dark:bg-secondary' value="Europe" onClick={()=> setIsOpen(!isOpen)}>Europe</option>
                        <option className='dark:bg-secondary' value="Oceania" onClick={()=> setIsOpen(!isOpen)}>Oceania</option>
                    </select>
                    <div className={`col-start-1 row-start-1 z-10 place-self-end self-start py-1 px-2 transition ${isOpen && 'rotate-180'}`}>
                        <ChevronDown size={24} color={theme == 'light' ? black : white} />
                    </div>
                </div>
            </div>
            <div className='flex justify-center p-8'>
                {selectedCountry ? <CountryInfo country={selectedCountry} goBack={goBack} /> : <CountryCards countries={results} setCountry={setCountry}/>}
            </div>
        </>
    )
}