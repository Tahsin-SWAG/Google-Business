/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import {Box , Container} from '@mui/system';
import {Typography} from '@mui/material';
import {Card_data} from './Datas';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Imperess from '../assets/impress_1.svg';

export default function Standout() {
    return (
        <Box>
            <Container>
                <Box sx={{display:{xs:'block' , md:'flex' , backgroundColor:'#ffffff'}}}>
                    <Box sx={{marginTop:{xs:'10%' , md:'35%'}}}>
                         <Typography variant='h4'>Stand out on Google with a free Business Profile</Typography>
                         <Typography>Turn people who find you on Google Search and Maps into new customers with a free Business Profile for your storefront or service area. Personalize your profile with photos, offers, posts, and more.</Typography>
                    </Box>
                    <Box sx={{marginTop:'10%' , display:'flex' , justifyContent:'center' , width:{xs:'100%' , md:'110%'}}}>
                        <img src={Imperess} style={{width:'100%'}}/>
                    </Box>
                </Box>
  <Box sx={{display:{xs:'block' , md:'flex' , marginTop:'7%'}}}>
    {Card_data.map((item) => ( 
  <Card sx={{width:{xs:'100%' , md:345 ,margin:'3%' , marginTop:{xs:'4%' , md:'0%'} , backgroundColor:'#ffffff'}}}>
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
