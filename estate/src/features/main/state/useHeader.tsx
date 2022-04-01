import constate from 'constate'
import { ChangeEvent, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

const useHeader = () => {
  const { i18n } = useTranslation('translation')

  const changeLanguageHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      i18n.changeLanguage(e.target.value).then((r) => console.log('r', r))
    },
    [i18n]
  )
  return {
    changeLanguageHandler
  }
}

export const [HeaderProvider, useHeaderContext] = constate(useHeader)
