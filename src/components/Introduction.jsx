import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

const Introduction = () => {
  return (
    <div className="about-me" id="about-me">
      <Grid container justifyContent={'center'}>
        <Grid item sm={12} md={10} lg={8} textAlign={'center'}>
          <Typography variant="h4" margin={3}>
            About Me
          </Typography>
          <Card
            sx={{
              borderRadius: '20px',
            }}
          >
            <CardHeader
              title="Nick Hanson - Full Stack Developer"
              sx={{
                textAlign: 'center',
              }}
            />
            <CardContent>
              <Typography variant="body" color="text.secondary">
                Motivated and results-driven Junior Software Developer with a
                decade of invaluable experience in Software Quality Assurance,
                now transitioning seamlessly into the realm of software
                development. My unique background combines a deep understanding
                of software testing methodologies with a strong foundation in
                coding and problem-solving. Eager to leverage my analytical
                mindset, attention to detail, and relentless pursuit of
                excellence to excel in software development.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Introduction
