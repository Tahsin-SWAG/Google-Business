/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import {Box , Container} from '@mui/system';
import {Typography} from '@mui/material';
import {Card_data} from './Datas';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Application from '../assets/application.svg';

export default function Standout() {
    return (
        <Box>
            <Container>
                <Box sx={{display:{xs:'block' , md:'flex' , backgroundColor:'#ffffff'}}}>
                    <Box sx={{marginTop:{xs:'10%' , md:'35%'}}}>
                         <Typography variant='h4'>Install business notes application for your daily notes and tasks</Typography>
                         <Typography sx={{color:'grey' , marginTop:'2%'}}>Notes can also be shared with other people by sending them an email invitation or by posting the note to an online service such as Evernote, OneNote, Simplenote, or Google Keep.</Typography>
                    </Box>
                    <Box sx={{marginTop:'10%' , display:'flex' , justifyContent:'center' , width:{xs:'100%' , md:'50%'}}}>
                        <img src={Application} style={{width:'100%' , borderRadius:'5px'}}/>
                    </Box>
                </Box>
  <Box sx={{display:{xs:'block' , md:'flex' , marginTop:'7%'}}}>
    {Card_data.map((item) => ( 
  <Card sx={{width:{xs:'100%' , md:345 ,margin:{xs:'' ,md:'3%'} , backgroundColor:'#ffffff'}}}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{display:'flex' , justifyContent:'center' , width:'15%' , marginLeft:'45%'}}
          image={item.card_image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{display:'flex' , justifyContent:'center'}}>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display:'flex' , justifyContent:'center'}}>
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    ))}
</Box>
            </Container>
        </Box>
    );
}
