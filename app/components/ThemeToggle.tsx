'use client'

import { Moon } from "@deemlol/next-icons";
import { Sun } from "@deemlol/next-icons";
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button className='flex gap-2 cursor-pointer' onClick={()=> theme === 'light' ? setTheme('dark') : setTheme('light')}>
            {theme == 'light' ? <Moon size={20} color="#000000" /> : <Sun size={24} color="#FFFFFF" />}
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    )
}