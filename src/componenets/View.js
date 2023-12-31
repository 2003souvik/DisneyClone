import React from 'react'
import styled from 'styled-components'

export default function View() {
  return (
    <Container>
     <Wrap>
      <img src="/images/viewers-disney.png" alt="" />
     </Wrap>
     <Wrap>
      <img src="/images/viewers-pixar.png" alt="" />
     </Wrap>
     <Wrap>
      <img src="/images/viewers-marvel.png" alt="" />
     </Wrap>
     <Wrap>
      <img src="/images/viewers-starwars.png" alt="" />
     </Wrap>
     <Wrap>
      <img src="/images/viewers-national.png" alt="" />
     </Wrap>

    </Container>
  )
}
const Container=styled.div`
 margin-top:50px;
 margin-left:10px;
 display:grid;
 grid-gap:20px;
 grid-template-columns:repeat(5,minmax(0,1fr));
`
const Wrap=styled.div`
height:80%;
width:80%;
border: 2px solid rgb(249,249,249,0.1);
border-radius:10px;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor:pointer;
transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
img{
  width:100%;
  height:100%;
  object-fit:cover;
}
&:hover{
  transform:scale(1.05);
  border-color:wheat;
}
`