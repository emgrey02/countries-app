import { Card } from "./Card";
import { SkeletonCard } from "./SkeletonCard";
import { Country } from "../types";

export const CountryCards = ({ countries, isLoading = false }: { countries: Country[], isLoading?: boolean }) => {
    const gridClasses = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8';

    if (isLoading) {
        return (
            <ul className={gridClasses}>
                {[...Array(8)].map((_, index) => (
                    <li key={index}>
                        <SkeletonCard />
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <ul className={gridClasses}>
            {countries?.map((country: Country) => (
               <li key={country.name.common}>
                    <Card country={country}/>
               </li>
            ))}
        </ul>
    );
};