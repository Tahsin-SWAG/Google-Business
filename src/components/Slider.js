/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container , Box, Typography} from "@mui/material";
import {Slide} from './Datas'

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Container sx={{width:{xs:'90%' , md:'100%'}}}>
        <Slider {...settings} style={{display:'flex'}}>  
          {Slide.map((item) =>{
            return(
              <Box sx={{display:'flex'}}>
                <Box sx={{width:{xs:'100%' , md:'50%' } , marginTop:'20%'}}>
                    <Typography variant="h5" sx={{marginTop:{xs:''}}}>{item.title}</Typography>
                </Box>
                <Box>
                <Box sx={{float:'right' , width:{xs:'100%' , md:'50%'} , marginTop:{xs:'0' , md:'-20%'}}}>
                  <img src={item.image} style={{width:'100%'}}/>
                </Box>
                </Box>
              </Box>
            )
          })}
          </Slider>
        </Container>
    );
  }
}