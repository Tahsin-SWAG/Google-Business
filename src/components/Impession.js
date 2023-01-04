/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Imperession } from "./Datas";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Impress from '../assets/impress_1.svg'

export default function Imperess(){

    return(
      <Box sx={{backgroundColor:'#f8f9fa' , marginTop:'5%'}}>
        <Typography variant="h4" sx={{display:'flex', justifyContent:'center'}}>Take charge of your first impression</Typography>
       <Typography sx={{display:'flex', justifyContent:'center'}}>What people may not know is that they can also be used as a powerful tool for productivity.</Typography>
        <Container sx={{display:{xs:'' , md:'flex'}}}>
            <Box sx={{marginTop:{xs:'5%' , md:'20%'}}}>
                   {Imperession.map((item) => (
                     <Accordion sx={{margin:'2%' , backgroundColor:'#f8f9fa'}}>
                     <AccordionSummary
                       expandIcon={<ExpandMoreIcon />}
                       aria-controls="panel1a-content"
                       id="panel1a-header"
                     >
                       <Typography variant="h5">{item.title}</Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                       <Typography>
                          {item.description}
                       </Typography>
                     </AccordionDetails>
                   </Accordion>
                   ))}
            </Box>
            <Box sx={{display:'flex' , justifyContent:'center' , marginTop:{xs:'5%' ,md:''} , marginLeft:{xs:'' ,md:'30%'} , width:{xs:'100%' , md:'70%'}}}>
                <img src={Impress} style={{width:'100%' , borderRadius:'5px'}}/>
            </Box>
        </Container>
      </Box>
    )
}