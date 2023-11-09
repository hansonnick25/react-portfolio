import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material'
import logo from '../assets/logo.png'
const Introduction = () => {
  return (
    <div className="about-me" id="about-me">
      <Grid container justifyContent={'center'}>
        <Grid item sm={10} md={10} lg={6} textAlign={'center'}>
          {/* <Typography variant="h4" margin={3}>
            About Me
          </Typography> */}
          <Card
            sx={{
              borderRadius: '20px',
            }}
          >
            <CardHeader
              title="Nick Hanson"
              subheader="Full Stack Developer"
              sx={{
                textAlign: 'center',
              }}
            />
            <CardMedia
              component="img"
              height="200"
              image={logo}
              alt={'My Logo'}
              title={'My Logo'}
              sx={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Typography variant="body">
                My name is Nick Hanson and I am a motivated and results-driven
                Junior Software Developer with a decade of invaluable experience
                in Software Quality Assurance, now transitioning seamlessly into
                the realm of software development. My unique background combines
                a deep understanding of software testing methodologies with a
                strong foundation in coding and problem-solving. Eager to
                leverage my analytical mindset, attention to detail, and
                relentless pursuit of excellence to excel in software
                development. I am a lifelong learner who is always looking to be
                challenged and grow as a developer.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Introduction
