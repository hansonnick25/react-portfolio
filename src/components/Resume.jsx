import { Typography } from '@mui/material'

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <Typography variant="h4" margin={3} textAlign={'center'}>
        Resume
      </Typography>
      <iframe
        src="/assets/NickHansonResume.docx"
        title="Nick Hanson's Resume"
        height={800}
        width={'80%'}
        style={{ margin: 'auto', display: 'block' }}
      ></iframe>
    </div>
  )
}

export default Resume
