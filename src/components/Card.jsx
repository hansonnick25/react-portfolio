import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
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
          minWidth: 200,
          minHeight: 600,
          maxHeight: 600,
          alignItems: 'center',
          margin: '10px',
          borderRadius: '20px',
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          sx={{ height: 600 }}
        >
          <Grid item>
            <CardMedia component="img" height={200} image={imageUrl} />
            <CardContent>
              <Typography variant="h5" textAlign={'center'} pb={1}>
                {title}
              </Typography>
              <Typography variant="p">{description}</Typography>
              <Typography variant="ul">
                {Object.values(tech).map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            container
            item
            direction="column"
            gap={1}
            p={1}
            alignItems="center"
          >
            <Button
              component="a"
              href={appLink}
              target="_blank"
              rel="noopener"
              variant="contained"
              sx={{ width: 180 }}
            >
              <Typography variant="p">View Application</Typography>
            </Button>
            <Button
              component="a"
              href={repoLink}
              target="_blank"
              rel="noopener"
              variant="contained"
              sx={{ width: 180 }}
            >
              <Typography variant="p">View Repository</Typography>
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

export default PortfolioCard
