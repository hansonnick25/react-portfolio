import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

const components = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
  },
  MuiLink: {
    defaultProps: {
      underline: 'none',
      color: 'white',
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        alignItems: 'center',
        margin: '10px',
        borderRadius: '20px',
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      required: true,
      variant: 'filled',
    },
  },
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#023e8a',
    },
  },
  components: components,
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#023e8a',
    },
  },
  components: components,
})

export default function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className='App'>
        <Header setTheme={setTheme} theme={theme} />
        <Introduction />
        <Portfolio />
        <Contact />
        <Resume />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
