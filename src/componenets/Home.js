import React from 'react'
import styled from 'styled-components'
import Imageslide from './Imageslide'
import View from './View'
import Movies from './Movies'



export default function Home() {
  return (
    <Container className='hb'>
      <Imageslide/>
      <View/>
      <Movies/>
    </Container>
  )
}
const Container=styled.main`
min-height:calc(100vh-70px);
padding:0 calc(3.5vw +5px);
position:relative;
overflow:hidden;
&:before{
  content: "";
    position: absolute;
    background: url('/images/home-background.png') no-repeat center center/cover fixed ;
    height: 100vh;
    top:0px;
    left:0px;
    width: 100%;
    z-index: -1;
    opacity: 0.9;
}

`
