import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <>
      <main>
        <header className='flex justify-between py-8 px-4 bg-white dark:bg-secondary'>
          <h1>Where in the world?</h1>
          <ThemeToggle/>
        </header>
      </main>
    </>
    
  );
}
