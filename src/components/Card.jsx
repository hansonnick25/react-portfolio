import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material/'

const PortfolioCard = props => {
  return (
    <div className="projects">
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
        <CardMedia sx={{ height: 200 }} image={props.imageUrl} />
        <CardContent>
          <Typography variant="h4" textAlign={'center'}>
            {props.title}
          </Typography>
          <Typography variant="p">{props.description}</Typography>
          <Typography variant="ul">
            {Object.values(props.tech).map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </Typography>
          <div style={{ textAlign: 'center' }}>
            <Button
              component="a"
              href={props.appLink}
              target="_blank"
              rel="noopener"
              variant="contained"
              color="primary"
              style={{
                marginTop: '.5rem',
                marginBottom: '.5rem',
              }}
            >
              Open Application
            </Button>
            <Button
              component="a"
              href={props.repoLink}
              target="_blank"
              rel="noopener"
              variant="contained"
              color="primary"
              style={{
                marginTop: '.5rem',
                marginBottom: '.5rem',
              }}
            >
              Open GitHub Repo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PortfolioCard
