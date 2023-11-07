import { Grid } from '@mui/material'
import ProjectCard from '../Card/index.jsx'

const Project = () => {
  return (
    <div className="projects">
      <Grid container margin={2} item md={12}>
        <Grid>
          <ProjectCard />
        </Grid>
        <Grid>
          <ProjectCard />
        </Grid>
        <Grid>
          <ProjectCard />
        </Grid>
        <Grid>
          <ProjectCard />
        </Grid>
        <Grid>
          <ProjectCard />
        </Grid>
        <Grid>
          <ProjectCard />
        </Grid>
      </Grid>
    </div>
  )
}

export default Project
