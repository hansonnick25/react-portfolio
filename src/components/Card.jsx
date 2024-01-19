import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  List,
  ListItem,
} from '@mui/material/'

const PortfolioCard = ({
  imageUrl,
  title,
  description,
  tech,
  appLink,
  repoLink,
}) => {
  return (
    <Box>
      <Card
        sx={{
          maxWidth: 345,
          minWidth: 345,
          minHeight: 750,
          maxHeight: 750,
          alignItems: 'center',
          margin: '10px',
          borderRadius: '20px',
        }}
      >
        <Grid
          container
          direction='column'
          justifyContent='space-between'
          sx={{ height: 750 }}
        >
          <Grid item>
            <CardMedia component='img' height={250} image={imageUrl} />
            <CardContent px={1.25}>
              <Typography variant='h5' textAlign={'center'} pb={1.25}>
                {title}
              </Typography>
              <Typography variant='p'>{description}</Typography>
              <List sx={{ listStyleType: 'disc', pl: 1.5 }}>
                {Object.values(tech).map((tech, index) => (
                  <ListItem key={index} sx={{ display: 'list-item' }}>
                    {tech}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Grid>
          <Box sx={{ mt: 'auto', mb: 1 }}>
            <CardActions>
              <Button
                component='a'
                href={appLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Typography variant='p'>View Application</Typography>
              </Button>
              <Button
                component='a'
                href={repoLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Typography variant='p'>View Repository</Typography>
              </Button>
            </CardActions>
          </Box>
        </Grid>
      </Card>
    </Box>
  )
}

export default PortfolioCard
