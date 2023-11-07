import Link from '@mui/material/Link'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-evenly' }}>
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
      </Toolbar>
    </AppBar>
  )
}

export default Header
