import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Sample project data
const projects = [
  {
    title: 'Modern Residence',
    description: 'Description for project one.',
    imageUrl: 'https://architectsgmr.com/img/projects/project-01.webp', // Placeholder image URL
    detailsUrl: '#',
  },
  {
    title: 'Project Two',
    description: 'Description for project two.',
    imageUrl: 'https://via.placeholder.com/400x300', // Placeholder image URL
    detailsUrl: '#',
  },
  {
    title: 'Project Three',
    description: 'Description for project three.',
    imageUrl: 'https://via.placeholder.com/400x300', // Placeholder image URL
    detailsUrl: '#',
  },
];

export default function Project() {
  return (
    <Container
      id="projects"
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
          Our Projects
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Explore some of our recent projects that showcase our expertise and commitment to transforming visions into reality.
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.detailsUrl}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}