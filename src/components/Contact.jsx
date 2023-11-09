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
  const [responseMessage, setResponseMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // let form = document.getElementById('contact-me-form')

    if (!formData.email || !formData.message) {
      setResponseMessage('Please fill out all fields')
      return
    }
    if (!validateEmail(formData.email)) {
      setResponseMessage('Please enter a valid email address')
      return
    }

    setLoading(true)

    emailjs
      .sendForm(
        'service_7pb3op9',
        'template_6rlkit6',
        document.getElementById('contact-me-form'),
        'qqvh9l_k9DDGWWdkf'
      )
      .then(
        result => {
          console.log(result.text)
          setResponseMessage('Message sent successfully')
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
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="email-form"
                    label="Your Email"
                    name="email"
                    onChange={handleChange}
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
                    margin="dense"
                    fullWidth
                  />
                </Box>
                <Typography>{responseMessage}</Typography>
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
