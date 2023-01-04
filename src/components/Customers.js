/* eslint-disable jsx-a11y/alt-text */
import { Typography , Button} from "@mui/material";
import { Box, Container } from "@mui/system";
import { Customer } from "./Datas";
import customer from '../assets/customer.svg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Customers(){
    return(
      <Box sx={{marginTop:'3%'}}>
         <Typography variant="h4" sx={{display:'flex' , justifyContent:'center'}}>Easily connect with Business notes</Typography>
          <Typography variant="p" sx={{display:'flex' , justifyContent:'center'}}>Get your business note app for connect with your nest tasks</Typography>
         <Container>
            <Box sx={{display:{xs:'block' , md:'flex'}}}>
              <Box sx={{width:{xs:"100%" ,md:'30%'}}}>
                 <img src={customer} style={{width:'100%'}}/>
              </Box>
              <Box sx={{marginTop:{xs:'' , md:'15%'} ,marginLeft:{xs:'0%' , md:'20%'}}}> 
                {Customer.map((item) => (
                   <Accordion sx={{width:{xs:'100%' , md:'60%'}}}>
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
                  <Button variant="contained" sx={{marginLeft:{xs:'40%' , md:'20%'} , marginTop:{xs:'5%' , md:'10%'}}}>Install</Button>
              </Box>
            </Box>
         </Container>
      </Box>
    )
}