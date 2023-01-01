import { Typography } from '@mui/material'
import {Box , Container} from '@mui/system'
import { Show_title , Show} from './Datas'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';


export default function show(){

    return(
         <Box sx={{marginTop:'5%'}}>
            <Container>
               <Box>
                 {Show_title.map((item) => (
                    <>
                    <Typography variant='h3' sx={{display:'flex' , justifyContent:'center'}}>{item.title}</Typography>
                    <Typography variant='p' sx={{display:'flex' , justifyContent:'center'}}>{item.description}</Typography>
                   </>
                 ))}
               </Box>
               <Box sx={{display:{xs:'block' , md:'flex'} , marginTop:'4%'}}>
                {Show.map((item) => (
                    <Card sx={{width:{xs:'100%' ,  md:345} , backgroundColor:'#f6f6f6' ,margin:'3%'}}>
                    <CardActionArea>
                      <img src={item.image} style={{width:'20%'}}/>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="body2">
                          {item.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
               </Box>
            </Container>
         </Box>
    )
}