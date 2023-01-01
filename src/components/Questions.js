import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import { Dropdown } from './Datas';

export default function Questions() {
  return (
    <Container>
         <Typography variant="h4" sx={{display:'flex' , justifyContent:'center'}}>Your questions, answered</Typography>
      {Dropdown.map((item) => (
        <Accordion sx={{margin:'3%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5'>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {item.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </Container>
  );
}