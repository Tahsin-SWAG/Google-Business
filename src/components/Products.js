import { Typography } from "@mui/material";
import { Container , Box} from "@mui/system";
import { Product } from "./Datas";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


export default function Products(){

   return(
    <Container sx={{marginTop:'7%'}}>
    <Box sx={{display:{xs:'block' , md:'flex'}}}>
      <Box sx={{width:{xs:'100%' , md:'40%'} , marginTop:'10%'}}>
        <Box>
        <Typography variant="h4">See what you have in notes app</Typography>
        <Typography variant="h6" sx={{color:'grey' , marginTop:'3%'}}>Notes app is a great tool for the modern person who values their time and wants to be more efficient. It helps you organize your thoughts so you can focus on what's important and get more done in less time.</Typography>
       </Box>
      </Box>
      <Box>
      {Product.map((item) =>(
        <Box sx={{marginLeft:{xs:'' , md:'50%'}}}>
        <Card sx={{ marginTop:'10%' , width:{xs:'100%' , md:345 } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={item.Card_image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.Card_title}
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