/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Customer } from "./Datas";
import {Button} from '@mui/material';
import customer from '../assets/customer.svg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Customers(){
    return(
      <Box sx={{marginTop:'3%'}}>
         <Typography variant="h4" sx={{display:'flex' , justifyContent:'center'}}>Easily connect with customers</Typography>
          <Typography variant="p" sx={{display:'flex' , justifyContent:'center'}}>Get your business on Google Search and Maps to help customers find you.</Typography>
         <Container>
            <Box sx={{display:{xs:'block' , md:'flex'}}}>
              <Box>
                 <img src={customer} style={{width:'100%'}}/>
              </Box>
              <Box sx={{marginTop:{xs:'' , md:'20%'}}}> 
                {Customer.map((item) => (
                   <Accordion>
                   <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                   >
                     <Typography variant="h5">{item.Dropdown_title}</Typography>
                   </AccordionSummary>
                   <AccordionDetails>
                     <Typography variant="p">
                       {item.Dropdown_description}
                     </Typography>
                   </AccordionDetails>
                 </Accordion>
                ))}
              </Box>
            </Box>
         </Container>
      </Box>
    )
}