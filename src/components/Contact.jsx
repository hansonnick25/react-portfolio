import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { validateEmail } from '../utils/helpers'

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', name: '', message: '' })
  const [responseMessage, setResponseMessage] = useState({
    message: '',
    type: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleBlur = e => {
    if (e.target.name == 'name' && !formData.name) {
      setResponseMessage({
        message: 'Please enter your name so I know who you are!',
        type: 'warning',
      })
    }

    e.target.name == 'email' && !formData.email
      ? setResponseMessage({
          message: 'Please enter your email so I can get back to you!',
          type: 'warning',
        })
      : console.log('fart')

    e.target.name == 'message' && !formData.message
      ? setResponseMessage({
          message: 'Please enter your message so I know what you want to say!',
          type: 'warning',
        })
      : console.log('fart')
  }

  const handleSubmit = e => {
    e.preventDefault()
    let form = document.getElementById('contact-me-form')

    if (!formData.email || !formData.message) {
      setResponseMessage({ message: 'Uh-oh, you fucked up', type: 'error' })
      return
    }
    if (!validateEmail(formData.email)) {
      setResponseMessage({
        message: 'Your email is an invalid, just like my grandma',
        type: 'error',
      })
      return
    }

    setLoading(true)

    emailjs
      .sendForm(
        'service_7pb3op9',
        'template_6rlkit6',
        form,
        'qqvh9l_k9DDGWWdkf'
      )
      .then(
        result => {
          console.log(result.text)
          setResponseMessage({ message: '', type: '' })
          setLoading(false)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <Box className="contact-me" id="portfolio">
      <Typography variant="h4" margin={3} textAlign={'center'}>
        Contact Me
      </Typography>
      <Grid container justifyContent={'center'}>
        <Grid item sm={10} md={10} lg={7} textAlign={'center'}>
          <Card>
            <CardContent>
              <form id="contact-me-form">
                <Box px={5}>
                  <Typography variant="body">
                    Please feel free to reach out to me with any questions or
                    inquiries you may have! I will get back to you as soon as I
                    am able.
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  margin={3}
                >
                  <TextField
                    id="name-form"
                    label="Your Name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="email-form"
                    label="Your Email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="message-form"
                    label="Your Message Here"
                    multiline
                    rows={4}
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="dense"
                    fullWidth
                  />
                </Box>
                <Typography>
                  {responseMessage
                    ? responseMessage.message
                    : console.log('fart')}
                </Typography>
              </form>
              <LoadingButton
                onClick={handleSubmit}
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="end"
                variant="contained"
              >
                <span>Send</span>
              </LoadingButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Contact
