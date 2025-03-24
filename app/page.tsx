import { MainContent } from "./components/MainContent";
import { ThemeToggle } from "./components/ThemeToggle";


export default async function Home() {

  const res = await fetch('https://restcountries.com/v3.1/all');

  if (!res.ok) {
    console.error('fetch failed.');
  } else {
    console.log('successfully fetched countries')
  }

  const all = await res.json();
  console.log(all);

  return (
    <>
      <main>
        <header className='flex justify-between py-8 px-4 bg-transparent dark:bg-secondary'>
          <h1 className='font-bold text-xl'>Where in the world?</h1>
          <ThemeToggle/>
        </header>
        <MainContent allCountries={all}/>
      </main>
    </>
    
  );
}
