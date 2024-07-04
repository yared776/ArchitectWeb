import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
    id="faq"
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
    <Typography
      component="h2"
      variant="h4"
      sx={{
        color: 'text.primary',
        width: { sm: '100%', md: '60%' },
        textAlign: { sm: 'left', md: 'center' },
      }}
    >
      Frequently asked questions
    </Typography>
    <Box sx={{ width: '100%' }}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography component="h3" variant="subtitle2">
          What is the motto of G.M.R Architects?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ maxWidth: { sm: '100%', md: '70%' } }}
          >
             Our motto is "Transforming Vision into Reality." Our motto is "Transforming Vision into Reality."
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography component="h3" variant="subtitle2">
          Where is G.M.R Architects located?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ maxWidth: { sm: '100%', md: '70%' } }}
          >
            G.M.R Architects is located at Grace Mall 9th floor Addis Ababa, Ethiopia.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography component="h3" variant="subtitle2">
          How can I contact G.M.R Architects?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ maxWidth: { sm: '100%', md: '70%' } }}
          >
            You can reach us by phone at +251 91 332 4275 or by email at info@architectsgmr.com.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography component="h3" variant="subtitle2">
          When was G.M.R Architects established?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ maxWidth: { sm: '100%', md: '70%' } }}
          >
            G.M.R Architects was established in Ethiopia.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  </Container>
  );
}
