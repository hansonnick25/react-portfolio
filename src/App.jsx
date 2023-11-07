import Header from './components/Header'
import Introduction from './components/Introduction'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Footer from './components/Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Introduction />
        <Portfolio />
        <Resume />
        <Footer text="Footer Note" />
      </div>
    </ThemeProvider>
  )
}
