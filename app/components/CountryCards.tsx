import { Card } from "./Card";

export const CountryCards = (props: {countries: any}) => {
    const res = props.countries;
    console.log(res);

    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1400px]'>
            {res?.map((country: any, index: number) => (
               <li key={index} className=''>
                    <Card country={country} />
               </li>
            ))}
        </ul>
    )
}