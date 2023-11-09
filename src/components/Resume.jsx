import {
  Box,
  Typography,
  Card,
  CardHeader,
  Grid,
  CardMedia,
  CardContent,
  Button,
  Link,
} from '@mui/material'
import resumeFile from '../assets/NickHansonResume.pdf'

const Resume = () => {
  return (
    <Box className="contact-me" id="portfolio">
      <Typography variant="h4" margin={3} textAlign={'center'}>
        Resume
      </Typography>
      <Grid container justifyContent={'center'}>
        <Grid item sm={10} md={10} lg={9} textAlign={'center'}>
          <Card>
            <CardHeader subheader="Download Below!" />
            <CardMedia component="iframe" src={resumeFile} height={800} />
            <CardContent>
              <Link
                href={resumeFile}
                download="NickHansonResume"
                target="_blank"
                rel="noreferrer"
              >
                <Button component="a">Download</Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Resume
