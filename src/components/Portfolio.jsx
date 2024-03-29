import { Box, Grid, Typography } from '@mui/material'
import PortfolioCard from './Card.jsx'
import codeQuiz from '../assets/codeQuiz.png'
import movieRanker from '../assets/movieRanker.png'
import passwordGenerator from '../assets/passwordGenerator.png'
import weatherDashboard from '../assets/weatherDashboard.png'
import workDayScheduler from '../assets/workDayScheduler.png'
import liftrApp from '../assets/liftrApp.png'

const Portfolio = () => {
  return (
    <Box className='portfolio' id='portfolio'>
      <Typography variant='h4' margin={3} textAlign={'center'}>
        Portfolio
      </Typography>
      <Grid container spacing={4} justifyContent={'center'}>
        <Grid item>
          <PortfolioCard
            imageUrl={liftrApp}
            title='Liftr'
            description='A simple app that allows you to track your workouts and see your progress over time.'
            tech={{
              tech1: 'AJAX',
              tech2: 'Bulma',
              tech3: 'MySQL',
              tech4: 'Sequelize',
              tech5: 'Express',
              tech6: 'Node',
              tech7: 'Handlebars',
            }}
            appLink='https://lifter-6a5bb4529987.herokuapp.com/login'
            repoLink='https://github.com/btsmith1212/Workout-Tracker'
          />
        </Grid>
        <Grid item>
          <PortfolioCard
            imageUrl={movieRanker}
            title='Movie Ranker'
            description='An app that tests your movie knowledge! See how high you can score!'
            tech={{
              tech1: 'AJAX',
              tech2: 'OMDb API',
              tech3: 'MoviesDatabase - RapidAPI',
            }}
            appLink='https://hansonnick25.github.io/movie-quiz/'
            repoLink='https://github.com/hansonnick25/movie-quiz'
          />
        </Grid>
        <Grid item>
          <PortfolioCard
            imageUrl={weatherDashboard}
            title='Weather Forecast'
            description='An app that allows you to search for a city and see the current weather conditions as well as a 5 day forecast.'
            tech={{
              tech1: 'JavaScript',
              tech2: 'Bootstrap',
              tech3: 'HTML/CSS',
            }}
            appLink='https://hansonnick25.github.io/weather-dashboard/'
            repoLink='https://github.com/hansonnick25/weather-dashboard'
          />
        </Grid>
        <Grid item>
          <PortfolioCard
            imageUrl={workDayScheduler}
            title='Work Day Scheduler'
            description=''
            tech={{
              tech1: 'JavaScript',
              tech2: 'Bootstrap',
              tech3: 'JQuery',
              tech4: 'DayJS',
              tech5: 'HTML/CSS',
            }}
            appLink='https://hansonnick25.github.io/work-day-schedule/'
            repoLink='https://github.com/hansonnick25/work-day-schedule'
          />
        </Grid>
        <Grid item>
          <PortfolioCard
            imageUrl={codeQuiz}
            title='Code Quiz'
            description='A timed quiz that tests your knowledge of JavaScript! See how high you can score!'
            tech={{
              tech1: 'JavaScript',
              tech2: 'Bootstrap',
              tech3: 'HTML/CSS',
            }}
            appLink='https://hansonnick25.github.io/code-quiz/'
            repoLink='https://github.com/hansonnick25/code-quiz'
          />
        </Grid>
        <Grid item>
          <PortfolioCard
            imageUrl={passwordGenerator}
            title='Password Generator'
            description='An app that allows you to generate a random password based on criteria that you select.'
            tech={{
              tech1: 'JavaScript',
              tech2: 'Bootstrap',
              tech3: 'HTML/CSS',
            }}
            appLink='https://hansonnick25.github.io/password-generator/'
            repoLink='https://github.com/hansonnick25/password-generator'
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Portfolio
