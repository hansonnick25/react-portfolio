import {
  Link,
  AppBar,
  Toolbar,
  Typography,
  FormControlLabel,
  Switch,
} from '@mui/material'

const Header = ({ setTheme }) => {
  const handleThemeToggle = event => {
    const { checked } = event.target
    setTheme(checked ? 'dark' : 'light')
  }

  return (
    <AppBar position="static" enableColorOnDark>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">
          <Link href="#">Nick Hanson</Link>
        </Typography>
        <Typography variant="h6">
          <Link href="#about-me">About Me</Link>
        </Typography>
        <Typography variant="h6">
          <Link href="#portfolio">Portfolio</Link>
        </Typography>
        <Typography variant="h6">
          <Link href="#resume">Resume</Link>
        </Typography>
        <FormControlLabel
          value="darkMode"
          control={
            <Switch
              defaultChecked
              onChange={handleThemeToggle}
              color="default"
            />
          }
          label={<Typography variant="h6">Dark Mode</Typography>}
          color="white"
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header
