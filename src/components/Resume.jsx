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
import DownloadIcon from '@mui/icons-material/Download'
import resumeFile from '../assets/NickHansonResume.pdf'

const Resume = () => {
  return (
    <Box className='resume' id='resume'>
      <Typography variant='h4' margin={3} textAlign={'center'}>
        Resume
      </Typography>
      <Grid container justifyContent={'center'}>
        <Grid item xs={12} sm={11} md={10} lg={9} textAlign={'center'}>
          <Card>
            <CardHeader subheader='Download Below!' />
            <CardMedia component='iframe' src={resumeFile} height={800} />
            <CardContent>
              <Link
                href={resumeFile}
                download='NickHansonResume'
                target='_blank'
                rel='noreferrer'
              >
                <Button component='a'>
                  Download<DownloadIcon></DownloadIcon>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Resume
