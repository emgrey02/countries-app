import Image from "next/image"
import { Country } from "../types"
import { ArrowLeft } from "@deemlol/next-icons";
import { useTheme } from "next-themes";
import countries from "i18n-iso-countries";
import enLocale from 'i18n-iso-countries/langs/en.json';

export const CountryInfo = (props: {country: Country, goBack: ()=> void}) => {
    const country = props.country; 
    const { theme } = useTheme();
    countries.registerLocale(enLocale);

    const formatCapitals = (caps: string[]) => {
        return caps?.join(', ') || caps;
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

    const black = '#000000';
    const white = '#FFFFFF';

    return (
        <div className='grid gap-8 px-4 py-8 md:px-8 md:py-16 animate-fade-slide-in'>
            <button className='cursor-pointer w-fit bg-transparent dark:bg-secondary px-4 py-2 shadow-md flex gap-2 pe-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'  onClick={props.goBack}>
                <ArrowLeft size={24} color={theme == 'light' ? black : white} />
                Go Back
            </button>

            <div className='flex flex-col sm:flex-row gap-8'>
                <div className=''>
                    <Image
                        className='rounded-sm'
                        priority
                        src={country.flags.svg}
                        width={1000}
                        height={300}
                        alt={country.flags.alt || `flag of ${country.name.common}`}
                    />
                </div>
                
                <div className='flex flex-col gap-y-8 w-full max-w-[500px]'>
                    <h2 className='text-3xl text-start font-bold'>{country.name.common}</h2>
                    <div className='flex flex-col md:flex-row gap-8'>
                        <div className='flex flex-col gap-y-3'>
                            <p><span className='font-semibold'>Native Name: </span>{formatNativeName(country.name.nativeName)}</p>
                            <p><span className='font-semibold'>Population: </span>{country.population.toLocaleString()}</p>
                            <p><span className='font-semibold'>Region: </span>{country.region}</p>
                            <p><span className='font-semibold'>Sub Region: </span>{country.subregion}</p>
                            <p><span className='font-semibold'>Capital: </span>{formatCapitals(country.capital)}</p>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <p><span className='font-semibold'>Top Level Domain: </span>{country.tld}</p>
                            <p><span className='font-semibold'>Currencies: </span>{formatCurrencies(country.currencies)}</p>
                            <p><span className='font-semibold'>Languages: </span>{formatLanguages(country.languages)}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-3'>
                        <p className='font-semibold'>Border Countries:</p>
                        <div className='flex gap-4 flex-wrap'>
                            {country.borders?.length ? country.borders.map((border, index) => (
                                <div key={index} className='bg-transparent dark:bg-secondary px-8 py-1 shadow-sm'>{countries.getName(border, 'en')}</div>
                            )) : <p>None</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}