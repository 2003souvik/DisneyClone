import React from 'react'
import styled from 'styled-components'
export default function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/Vw.jpg" alt="" />
      </Background>
      <Controls>
          <Play>
            <img src="/images/play-icon-black.png" alt="" />
        
          </Play>
          <Trailor>

          </Trailor>
          <Add>

          </Add>
          <Group>

          </Group>
      </Controls>
    </Container>
  )
}
const Container=styled.div`
min-height:calc(100vh-70px);
padding:0 calc(3.5vw +5px);
background: url('/images/home-background.png') no-repeat center center/cover fixed ;
height: 100vh;
top:0px;
left:0px;
width: 100%;
z-index: -1;
opacity: 0.9;
position:relative;
`
const Background=styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-indez:-1;
opacity:0.65;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}

`
const Controls=styled.div`
`
const Play=styled.button``
const Trailor=styled.button``
const Add=styled.button``
const Group=styled.button``