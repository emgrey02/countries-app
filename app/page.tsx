import { ThemeToggle } from "./components/ThemeToggle";
import Image from "next/image";

export default async function Home() {

  const res = await fetch('https://restcountries.com/v3.1/all');

  if (!res.ok) {
    console.error('fetch failed.');
  } else {
    console.log('successfully fetched countries')
  }

  const all = await res.json();
  console.log(all);

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

  const formatCapitals = (caps: Array<string>) => {
    if (caps?.length) {
      const joined = caps.join(', ');
      return joined;
    } else {
      return caps;
    }
    
  }

  return (
    <>
      <main>
        <header className='flex justify-between py-8 px-4 bg-white dark:bg-secondary'>
          <h1>Where in the world?</h1>
          <ThemeToggle/>
        </header>
        <div className='flex justify-center p-8 '>
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1400px]'>
            {all?.map((country: any, index: number) => (
               <li key={index} className=''>
                <button className='bg-transparent dark:bg-secondary cursor-pointer min-h-60 grid h-full rounded-sm max-w-70'>
                  <div className='max-h-40 overflow-clip'>
                    <Image
                        className='rounded-t-sm'
                        src={country.flags.svg}
                        width={500}
                        height={300}
                        alt={country.flags.alt || `flag of ${country.name.common}`}
                    />
                  </div>
                  <div className='self-end px-4 pb-4 items-start flex flex-col'>
                    <h2 className='text-xl py-4 text-start font-extrabold'>{country.name.common}</h2>
                    <div className='flex flex-col items-start text-start'>
                      <p><span className='font-bold'>Population: </span>{formatPopulation(country.population)}</p>
                      <p><span className='font-bold'>Region: </span>{country.region}</p>
                      <p><span className='font-bold'>Capital: </span>{formatCapitals(country.capital)}</p>
                    </div>
                  </div>
                </button>
               </li>
            ))}
          </ul>
        </div>
      </main>
    </>
    
  );
}
