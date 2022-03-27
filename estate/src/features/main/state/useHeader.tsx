import constate from 'constate'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const useHeader = () => {
  const { i18n } = useTranslation('translation')
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

  const changeLanguageHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      i18n.changeLanguage(e.target.value).then((r) => console.log('r', r))
    },
    [i18n]
  )
  return {
    theme,
    toggleTheme,
    changeLanguageHandler
  }
}

export const [HeaderProvider, useHeaderContext] = constate(useHeader)
