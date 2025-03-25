import { ChevronDown } from "@deemlol/next-icons"
import { useTheme } from "next-themes"
import { useState } from "react";

export const RegionFilter = (props: {setSelectedRegion: (region: string) => void}) => {
    const { theme } = useTheme();
    const black = '#000000';
    const white = '#FFFFFF';
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <label className='hidden' htmlFor="filter">Filter by Region</label>
            <div className='w-full grid grid-cols-1 rounded-sm px-2 py-1 cursor-pointer bg-transparent dark:bg-secondary shadow-sm' >
                <select className='col-start-1 row-start-1 appearance-none border-none w-full outline-none px-2 py-1 me-8 z-20 cursor-pointer' name="filter" id="filter" onClick={()=> setIsOpen(!isOpen)} onChange={e => props.setSelectedRegion(e.target.value)}>
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
        </>
    )
}