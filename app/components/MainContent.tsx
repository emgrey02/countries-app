'use client'
import { useEffect, useState } from "react";
import { CountryCards } from "./CountryCards"
import { Search } from "@deemlol/next-icons";
import { ChevronDown } from "@deemlol/next-icons"; 
import { useTheme } from "next-themes";

export const MainContent = (props: {allCountries: any}) => {
    const { theme, setTheme } = useTheme();
    const [selectedRegion, setSelectedRegion] = useState('No Filter');
    const [results, setResults] = useState(props.allCountries);

    useEffect(()=> {
        if (selectedRegion !== 'No Filter') {
            const res = props.allCountries.filter((country: any) => country.region === selectedRegion);
            setResults(res);
        }
    }, [selectedRegion, props.allCountries])

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
            <div className='flex bg-transparent dark:bg-secondary w-fit rounded-sm ms-4 mb-8 '>
                <label className='hidden' htmlFor="filter">Filter by Region</label>
                <div className='w-full grid grid-cols-1 rounded-sm px-2 py-1 cursor-pointer bg-transparent dark:bg-secondary shadow-sm' >
                    <select className='col-start-1 row-start-1 appearance-none border-none w-full outline-none px-2 py-1 me-8 z-20 cursor-pointer' name="filter" id="filter" value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
                        <option className='dark:bg-secondary' value='No Filter'>Filter by Region</option>
                        <option className='dark:bg-secondary' value="Africa">Africa</option>
                        <option className='dark:bg-secondary' value="Americas">America</option>
                        <option className='dark:bg-secondary' value="Asia">Asia</option>
                        <option className='dark:bg-secondary' value="Europe">Europe</option>
                        <option className='dark:bg-secondary' value="Oceania">Oceania</option>
                    </select>
                    <div className='col-start-1 row-start-1 z-10 place-self-end self-start pt-1 pe-2'>
                        <ChevronDown size={24} color={theme == 'light' ? black : white} />
                    </div>
                </div>
            </div>
            <div className='flex justify-center p-8'>
                <CountryCards countries={results}/>
            </div>
        </>
    )
}