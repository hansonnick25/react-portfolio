import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

const ProjectCard = props => {
  return (
    <div className="projects">
      <Card
        sx={{
          maxWidth: 345,
          minWidth: 200,
          alignItems: 'center',
          margin: '10px',
        }}
      >
        <CardMedia
          sx={{ height: 200 }}
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <p>Tech used in this project: {props.tech}</p>
          <Button
            component="a"
            href={props.appLink}
            target="_blank"
            rel="noopener"
            variant="contained"
            color="primary"
            style={{ marginBottom: '10px', marginRight: '10px' }}
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
          >
            Open GitHub Repo
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProjectCard
