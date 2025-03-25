import { Card } from "./Card";
import { Country } from "../types";

export const CountryCards = (props: {countries: Country[], setCountry: (countryName: string)=>void}) => {
    const res = props.countries;

    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {res?.map((country: Country, index: number) => (
               <li key={index} className=''>
                    <Card country={country} setCountry={props.setCountry}/>
               </li>
            ))}
        </ul>
    )
}