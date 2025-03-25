'use client'

import { useCountries } from '@/app/context/CountryContext'
import { CountryInfo } from '@/app/components/CountryInfo'
import { useRouter } from 'next/navigation'
import { Country } from '../types'
import { useState, useEffect } from 'react'

export function CountryPage({ countryName }: { countryName: string }) {
  const router = useRouter()
  const { countries, getCountry, isLoading: contextLoading } = useCountries()
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    if (!countries.length) {
      return;
    }

    try {
      const decodedName = decodeURIComponent(countryName);
      const foundCountry = getCountry(decodedName);
      setCountry(foundCountry || null);
    } catch (error) {
      console.error('Error finding country:', error);
      setCountry(null);
    }
  }, [countryName, countries, getCountry]);

  if (contextLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse">Loading country</div>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="p-8">
        <button 
          onClick={() => router.back()}
          className="mb-4 px-4 py-2 bg-transparent dark:bg-secondary shadow-md rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          ← Back
        </button>
        <div className="text-center mt-8">
          <h2 className="text-xl font-semibold">Country not found</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            The country you&apos;re looking for doesn&apos;t exist in our database.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animate-fade-in">
      <CountryInfo 
        country={country} 
        goBack={() => router.back()} 
      />
    </div>
  );
}