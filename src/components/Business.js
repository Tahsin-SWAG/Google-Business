/* eslint-disable jsx-a11y/alt-text */
import { Typography , Button} from "@mui/material";
import { Container , Box} from "@mui/system";
import { Busines } from "./Datas";

export default function Business() {
 return (
   <Box sx={{backgroundColor:'#f8f9fa'}}>
     <Container sx={{marginTop:'5%' , display:{xs:'block' , md:'flex' , marginTop:'5%'}}}>
      
       <Box sx={{display:'flex' ,justifyContent:'center' , width:{xs:"100%" , md:'40%'}}}>
           {Busines.map((item) => (
            <Box sx={{width:{xs:'100%' , md:'70%'}}}>
                  <img src={item.image} style={{width:'100%'}}/>
                </Box>
           ))}          
        </Box>
        <Box>
            {Busines.map((item) =>(
                <Box sx={{width:{xs:'100%' , md:'70%'} , justifyContent:'center' , marginTop:{xs:'2rem' , md:'7rem'}}}>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography sx={{color:'grey',marginTop:'2%'}}>{item.description}</Typography>
                </Box>
            ))}
         <Button variant="contained" sx={{marginLeft:{xs:'40%' , md:'20%'} , marginTop:{xs:'5%' , md:'10%'}}}>Install</Button>
        </Box>
        
    </Container>
   </Box>
 )
}