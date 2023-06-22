import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Imageslide() {
    let settings={
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };
  return (
    <Carosuel {...settings}>
     <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
        </Wrap> 
     <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
        </Wrap> 
     <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
        </Wrap> 
     <Wrap>
        <img src="/images/slider-scales.jpg" alt="" />
        </Wrap> 
       
    </Carosuel>
    
    
  )
}

const Carosuel=styled(Slider)`
margin-top:20px;
margin-right:25px;
margin-left:25px;
ul li button{
    &:before{
        font-size:10px;
        color:white;
    }
}
li.slick-active button:before{
    color:white;
}
.slick-list{
    overflow:visible;

}
button{
    z-index:1;
}
`
const Wrap=styled.div`
cursor:pointer;
 img{
    border: 4px solid transparent;
    width:100%;
    height:100%;
    border-radius:10px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 1s ease-in-out;
    &:hover{
        border:4px solid wheat;
    }

 }
`