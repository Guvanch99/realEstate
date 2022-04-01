import React from 'react'
import ReactDOM from 'react-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components/macro'
import Routes from './Routes'
import { queryClient } from './core/queryClient'
import { GlobalStyles } from './components/GlobalStyles'
import './core/i18n'
import { ThemeProviderStyled, useThemeProvider } from './state/useTheme'
import { darkTheme, lightTheme } from './styles/stylesTheme'

const App = () => {
  const { theme } = useThemeProvider()
  document.body.style.background = theme ? '#fff' : '#1d3c45'
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <QueryClientProvider client={queryClient}>
        <Routes/>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

ReactDOM.render(<ThemeProviderStyled><App/></ThemeProviderStyled>, document.getElementById('root'))
