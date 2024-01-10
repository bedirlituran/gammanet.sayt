"use client";
import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { CiDark, CiLight } from "react-icons/ci";


const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const themeMode = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {
        mounted && (
          <div>
            {
              themeMode === "dark" ? (
                <CiLight onClick={() => setTheme("light")} size={25} className='cursor-pointer' />
              ) : (
                <CiDark onClick={() => setTheme("dark")} size={25} className='cursor-pointer' color='white' />
              )
            }
          </div>
        )
      }

    </div>

  )
}

export default ThemeComp
