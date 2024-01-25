import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

const sections = ['Portfolio', 'Contact', 'Resume']

const Header = ({ theme, setTheme }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleSwitchTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  const handleClickNavMenu = event => {
    const page = event.currentTarget.innerText.toLowerCase()
    const element = document.getElementById(page)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <AppBar position='sticky' enableColorOnDark>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              aria-label='expand navigation'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sections.map(section => (
                <MenuItem key={section} onClick={handleClickNavMenu}>
                  <Typography
                    variant='h5'
                    noWrap
                    component='a'
                    sx={{
                      mr: 2,
                      display: { xs: 'flex', md: 'none' },
                      flexGrow: 1,
                      fontWeight: 700,
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    {section}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Nick Hanson
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sections.map(section => (
              <Button
                key={section}
                onClick={handleClickNavMenu}
                variant='text'
                sx={{ my: 2, pr: 2.5, color: 'inherit', display: 'block' }}
              >
                {section}
              </Button>
            ))}
          </Box>

          <IconButton onClick={() => handleSwitchTheme()}>
            {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
