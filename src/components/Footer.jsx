import {
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart'

const Footer = () => {
  return (
    <Toolbar sx={{ justifyContent: 'center' }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label={<GitHubIcon />}
          href='https://github.com/hansonnick25'
        />
        <BottomNavigationAction
          label={<LinkedInIcon />}
          href='https://www.linkedin.com/in/nicholashanson97/'
        />
        {/* <BottomNavigationAction
          label={<StackedLineChartIcon />}
          href='https://stackoverflow.com/users/3540574/hansonnick25'
        /> */}
      </BottomNavigation>
    </Toolbar>
  )
}

export default Footer
