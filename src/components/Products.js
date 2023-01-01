import { Typography } from "@mui/material";
import { Container , Box} from "@mui/system";
import { Product } from "./Datas";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


export default function Products(){

   return(
    <Container>
    <Box sx={{display:{xs:'block' , md:'flex'}}}>
      <Box sx={{width:{xs:'100%' , md:'40%'} , marginTop:'10%'}}>
        <Box>
        <Typography variant="h4">Show what you offer, from product to services</Typography>
        <Typography variant="h6" sx={{color:'grey' , marginTop:'3%'}}>Whether your resturant, store, or service provider, your profile helps customers do business with you easily and directly with product inventory, ordering, bookings, quotes and more</Typography>
       </Box>
      </Box>
      <Box>
      {Product.map((item) =>(
        <Box sx={{marginLeft:{xs:'' , md:'60%'}}}>
        <Card sx={{ marginTop:'10%' , width:{xs:'100%' , md:445 } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={item.Card_image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.Card_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.Card_description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Box>
      ))}
    </Box>
    </Box>
</Container>
   )
}