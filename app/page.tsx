'use client'

import { useCountries } from './context/CountryContext'
import { MainContent } from "./components/MainContent";

export default function Home() {
  const { countries } = useCountries()

  return (
    <main>
      <MainContent allCountries={countries}/>
    </main>
  );
}
