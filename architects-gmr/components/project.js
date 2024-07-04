import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Sample project data
const projects = [
  {
    title: 'Modern Residence',
    description: 'Contemporary design with spacious interiors and eco-friendly features.',
    architect: 'John Smith Architects',
    location: 'Los Angeles, CA',
    imageUrl: 'https://architectsgmr.com/img/projects/project-01.webp', // Placeholder image URL
  },
  {
    title: 'Urban Office Complex',
    description: 'Innovative office spaces designed for collaboration and productivity.',
    architect: 'Jane Doe Architects',
    location: 'New York, NY',
    imageUrl: 'https://architectsgmr.com/img/projects/project-02.webp', // Placeholder image URL
  },
  {
    title: 'Luxury Villa',
    description: 'A luxurious villa with breathtaking views and modern amenities.',
    architect: 'David Williams Architects',
    location: 'Miami, FL',
    imageUrl: 'https://architectsgmr.com/img/projects/project-03.webp', // Placeholder image URL
  },
  // Add more architectural projects as needed
];

const Project = () => {
  return (
    <Container id="projects" sx={{ py: 4 }}>
      <Box
        sx={{
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Projects
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Architect:</strong> {project.architect}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <LocationOnIcon fontSize="small" /> {project.location}
                </Typography>
                <Typography variant="body2" mt={2}>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Project;