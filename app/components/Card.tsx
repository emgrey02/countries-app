import Image from "next/image"
import Link from "next/link"
import { Country } from "../types"

export const Card = (props: {country: Country}) => {
    const country = props.country;

    const formatCapitals = (caps: string[]) => {
        return caps?.join(', ') || caps;
    }

    return (
        <Link href={`/country/${country.name.common}`} 
              className='bg-transparent dark:bg-secondary cursor-pointer min-h-60 grid h-full rounded-sm shadow-sm opacity-0 animate-fade-in' 
              passHref>
            <div className='max-h-40 w-auto overflow-clip'>
                <Image
                    className='rounded-t-sm'
                    priority
                    src={country.flags.svg}
                    width={500}
                    height={300}
                    alt={country.flags.alt || `flag of ${country.name.common}`}
                />
            </div>
            <div className='self-end px-4 pb-4 items-start flex flex-col'>
                <h2 className='text-2xl py-4 text-start font-bold'>{country.name.common}</h2>
                <div className='flex flex-col items-start text-start'>
                    <p className='text-gray-700 dark:text-gray-300'><span className='font-semibold text-gray-800 dark:text-gray-300'>Population: </span>{country.population.toLocaleString()}</p>
                    <p className='text-gray-700 dark:text-gray-300'><span className='font-semibold text-gray-800 dark:text-gray-300'>Region: </span>{country.region}</p>
                    <p className='text-gray-700 dark:text-gray-300'><span className='font-semibold text-gray-800 dark:text-gray-300'>Capital: </span>{formatCapitals(country.capital)}</p>
                </div>
            </div>
        </Link>
    )
}