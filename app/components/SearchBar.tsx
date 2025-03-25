import { Search } from "@deemlol/next-icons"
import { useTheme } from "next-themes"

export const SearchBar = (props: {setSearch: (search: string)=>void}) => {
    const { theme } = useTheme();
    const black = '#000000';    
    const white = '#FFFFFF';

    return (
        <form className='flex gap-8 bg-transparent dark:bg-secondary rounded-sm shadow-sm p-1 pe-10'>
            <div className='ps-4 py-2'>
                <Search size={24} color={theme == 'light' ? black : white} />
            </div>
            <input className='px-2 pe-10 w-full' placeholder='Search for a country...' type="text" name="search" id="search"  onChange={e => props.setSearch(e.target.value)}/>
            <label className='hidden' htmlFor="search">Search for a country...</label>
        </form>
    )
}