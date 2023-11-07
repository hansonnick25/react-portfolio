import { Card, CardContent, CardHeader, Typography } from '@mui/material'

const Introduction = () => {
  return (
    <div className="about-me" id="about-me">
      <Typography variant="h4" margin={3} textAlign={'center'}>
        About Me
      </Typography>
      <Card
        sx={{
          margin: '2.5rem',
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
            Motivated and results-driven Junior Software Developer with a decade
            of invaluable experience in Software Quality Assurance, now
            transitioning seamlessly into the realm of software development. My
            unique background combines a deep understanding of software testing
            methodologies with a strong foundation in coding and
            problem-solving. Eager to leverage my analytical mindset, attention
            to detail, and relentless pursuit of excellence to excel in software
            development.
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Introduction
