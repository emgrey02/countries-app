'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { Country } from '../types';

type CountryContextType = {
	countries: Country[];
	setCountries: (countries: Country[]) => void;
	getCountry: (name: string) => Country | undefined;
	isLoading: boolean;
};

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: React.ReactNode }) {
	const [countries, setCountries] = useState<Country[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const response = await fetch(
					'https://www.restcountries.com/v3.1/all?fields=name,flags,population,region,capital,languages,currencies,subregion,tld,borders'
				);
				const data = await response.json();
				setCountries(data);
				setIsLoading(false);
			} catch (error) {
				console.error('Failed to fetch countries:', error);
				setIsLoading(false);
			}
		};

		fetchCountries();
	}, []);

	const getCountry = (name: string) => {
		if (!name) return undefined;
		console.log('Searching for:', name);
		console.log('Countries:', countries);

		return countries.find((country) => {
			return country.name.common.toLowerCase() === name.toLowerCase();
		});
	};

	return (
		<CountryContext.Provider
			value={{ countries, setCountries, getCountry, isLoading }}
		>
			{children}
		</CountryContext.Provider>
	);
}

export function useCountries() {
	const context = useContext(CountryContext);
	if (context === undefined) {
		throw new Error('useCountries must be used within a CountryProvider');
	}
	return context;
}
