import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactUs() {
  return (
    <Container
      id="contact-us"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" sx={{ color: 'text.primary' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          We'd love to hear from you! Please reach out using one of the contact methods below or find us on the map.
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmailIcon />
                <Typography variant="body1">
                  <a href="mailto:info@architectsgmr.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                    info@architectsgmr.com
                  </a>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneIcon />
                <Typography variant="body1">
                  <a href="tel:+251913324275" style={{ textDecoration: 'none', color: 'inherit' }}>
                    +251 91 332 4275
                  </a>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOnIcon />
                <Typography variant="body1">Addis Ababa, Ethiopia</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <CardContent>
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4684875257944!2d38.794303874529255!3d9.020956291040052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85be0350ae17%3A0x4225416688f1765c!2sG.M.R%20Architects!5e0!3m2!1sen!2set!4v1720063977531!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
