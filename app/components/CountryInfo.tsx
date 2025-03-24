import Image from "next/image"
import { Country } from "../types"


export const CountryInfo = (props: {country: Country, goBack: ()=> void}) => {
    const country = props.country;
    console.log(country)
    
    const formatPopulation = (pop: number) => {
        const popArray = pop.toString().split('');
        if (popArray.length > 3 ) {
        popArray.splice(-3, 0, ',');
        }
        if (popArray.length > 7) {
        popArray.splice(-7, 0, ',');
        }
        if (popArray.length > 11) {
        popArray.splice(-11, 0, ',');
        }
        const finalPop = popArray.join('');
        return finalPop;
    }

    const formatCapitals = (caps: string[]) => {
        if (caps?.length) {
            const joined = caps.join(', ');
            return joined;
        } else {
            return caps;
        }
    }

    const formatCurrencies = (curr: Country["currencies"]) => {
        const currArray = Object.values(curr).map((currency) => currency.name);
        const joined = currArray.join(', ');
        return joined;
    }

    const formatLanguages = (langs: Country["languages"]) => {
        const langArray = Object.values(langs);
        const joined = langArray.join(', ');
        return joined;
    }

    const formatNativeName = (nativeName: Country["name"]["nativeName"]) => {
        const nativeArray = Object.values(nativeName).map((name) => name.common);
        const joined = nativeArray.join(', ');
        return joined;
    }

    return (
        <div className='grid gap-8 px-8'>
            <button className='cursor-pointer w-fit' onClick={props.goBack}>Go Back</button>

            
            <Image
                className='rounded-sm'
                src={country.flags.svg}
                width={500}
                height={300}
                alt={country.flags.alt || `flag of ${country.name.common}`}
            />
            
            <div className='flex flex-col gap-y-8'>
                <h2 className='text-xl text-start font-extrabold'>{country.name.common}</h2>
                <div className='flex flex-col gap-y-3'>
                    <p><span className='font-bold'>Native Name: </span>{formatNativeName(country.name.nativeName)}</p>
                    <p><span className='font-bold'>Population: </span>{formatPopulation(country.population)}</p>
                    <p><span className='font-bold'>Region: </span>{country.region}</p>
                    <p><span className='font-bold'>Sub Region: </span>{country.subregion}</p>
                    <p><span className='font-bold'>Capital: </span>{formatCapitals(country.capital)}</p>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <p><span className='font-bold'>Top Level Domain: </span>{country.tld}</p>
                    <p><span className='font-bold'>Currencies: </span>{formatCurrencies(country.currencies)}</p>
                    <p><span className='font-bold'>Languages: </span>{formatLanguages(country.languages)}</p>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <p>Border Countries:</p>
                    <div className='flex gap-4'>
                        {country.borders?.length ? country.borders.map((border, index) => (
                            <button key={index} className='bg-transparent dark:bg-secondary cursor-pointer px-8 py-1'>{border}</button>
                        )) : <p>None</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}