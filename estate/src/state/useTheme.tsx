import constate from 'constate'
import { useEffect, useState } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState<boolean>(false)
  const toggleTheme = () => setTheme((prev) => !prev)

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(true)
    } else {
      setTheme(false)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return {
    theme,
    toggleTheme
  }
}

export const [ThemeProviderStyled, useThemeProvider] = constate(useTheme)
