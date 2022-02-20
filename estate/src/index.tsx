import React from 'react'
import ReactDOM from 'react-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query'
import styled, { ThemeProvider } from 'styled-components/macro'
import Routes from './Routes'
import { queryClient } from './core/queryClient'
import { GlobalStyles } from './components/GlobalStyles'
import { styledTheme } from './styles/stylesTheme'
import './core/i18n'

const App = () => (
  <ThemeProvider theme={styledTheme}>
    <GlobalStyles/>
    <QueryClientProvider client={queryClient}>
      <Routes/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </ThemeProvider>
)

ReactDOM.render(<App/>, document.getElementById('root'))
