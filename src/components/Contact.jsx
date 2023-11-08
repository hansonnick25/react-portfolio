import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { validateEmail } from '../utils/helpers'

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', name: '', message: '' })
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    let form = document.getElementById('contact-me-form')
    console.log(formData)

    if (!formData.email || !formData.message) {
      setErrorMessage('Please fill out all fields')
      return
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address')
      return
    }
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
          alert('Message sent successfully')
        },
        error => {
          console.log(error.text)
        }
      )

    formData.email = ''
    formData.name = ''
    formData.message = ''
  }

  return (
    <Grid container justifyContent={'center'}>
      <Grid item sm={10} md={10} lg={8} textAlign={'center'}>
        <Card
          sx={{
            borderRadius: '20px',
          }}
        >
          <CardHeader
            title="Contact Me"
            sx={{
              textAlign: 'center',
            }}
          />
          <CardContent>
            <form id="contact-me-form">
              <Box paddingLeft={4} paddingRight={4}>
                <Typography variant="body">
                  Please feel free to reach out to me with any questions or
                  inquiries you may have! I will get back to you as soon as I am
                  able.
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
                  required
                  id="name-form"
                  label="Your Name"
                  variant="filled"
                  name="name"
                  onChange={handleChange}
                  margin="dense"
                  fullWidth
                />
                <TextField
                  id="email-form"
                  label="Your Email"
                  variant="filled"
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
                  variant="filled"
                  name="message"
                  onChange={handleChange}
                  margin="dense"
                  fullWidth
                />
              </Box>
              {errorMessage && <p className="mt-2">{errorMessage}</p>}
            </form>
            <Button variant="contained" onClick={handleSubmit}>
              <Typography variant="body">Submit</Typography>
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Contact
