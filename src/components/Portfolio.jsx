import { Grid, Typography } from '@mui/material'
import PortfolioCard from './Card.jsx'

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <Typography variant="h4" margin={3} textAlign={'center'}>
        Portfolio
      </Typography>
      <Grid container margin={2} item md={12} justifyContent={'space-evenly'}>
        <Grid>
          <PortfolioCard
            imageUrl="./assets/workoutTracker.png"
            title="Workout Tracker"
            description="A simple app that allows you to track your workouts and see your progress over time."
            tech={{
              tech1: 'AJAX',
              tech2: 'Bulma',
              tech3: 'MySQL',
              tech4: 'Sequelize',
              tech5: 'Express',
              tech6: 'Node',
              tech7: 'Handlebars',
            }}
            appLink="https://lifter-6a5bb4529987.herokuapp.com/login"
            repoLink="https://github.com/btsmith1212/Workout-Tracker"
          />
        </Grid>
        <Grid>
          <PortfolioCard
            imageUrl="./assets/movieRanker.png"
            title="Movie Ranker"
            description="An app that tests your movie knowledge! See how high you can score!"
            tech={{
              tech1: 'AJAX',
              tech2: 'OMDb API',
              tech3: 'MoviesDatabase - RapidAPI',
            }}
            appLink="https://hansonnick25.github.io/movie-quiz/"
            repoLink="https://github.com/hansonnick25/movie-quiz"
          />
        </Grid>
        <Grid>
          <PortfolioCard
            imageUrl="./assets/weatherDashboard.png"
            title="Weather Forecast"
            description="An app that allows you to search for a city and see the current weather conditions as well as a 5 day forecast."
            tech={{
              tech1: 'JavaScript',
              tech2: 'Bootstrap',
              tech3: 'HTML',
              tech4: 'CSS',
            }}
            appLink="https://hansonnick25.github.io/weather-dashboard/"
            repoLink="https://github.com/hansonnick25/weather-dashboard"
          />
        </Grid>
        <Grid>
          <PortfolioCard
            imageUrl="./assets/workDayScheduler.png"
            title="Work Day Scheduler"
            description=""
            tech={{
              tech1: 'DayJS',
              tech2: 'BootStrap',
              tech3: 'JQuery',
              tech4: 'HTML/CSS/JavaScript',
            }}
            appLink="https://hansonnick25.github.io/work-day-schedule/"
            repoLink="https://github.com/hansonnick25/work-day-schedule"
          />
        </Grid>
        <Grid>
          <PortfolioCard
            imageUrl="./assets/codeQuiz.png"
            title="Code Quiz"
            description="A timed quiz that tests your knowledge of JavaScript! See how high you can score!"
            tech={{
              tech1: 'JavaScript',
              tech2: 'Bootstrap',
              tech3: 'HTML',
              tech4: 'CSS',
            }}
            appLink="https://hansonnick25.github.io/code-quiz/"
            repoLink="https://github.com/hansonnick25/code-quiz"
          />
        </Grid>
        <Grid>
          <PortfolioCard
            imageUrl="./assets/passwordGenerator.png"
            title="Password Generator"
            description="An app that allows you to generate a random password based on criteria that you select."
            tech={{
              tech1: 'JavaScript',
              tech2: 'HTML',
              tech3: 'CSS',
            }}
            appLink="https://hansonnick25.github.io/password-generator/"
            repoLink="https://github.com/hansonnick25/password-generator"
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Portfolio
