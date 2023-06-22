import React from 'react'
import styled from 'styled-components'
export default function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QKqzlUj6kp_mcvdr1kB83EzILVHKC0vF-TPZXfueqg&usqp=CAU&ec=48665701" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvLDbUK6iXik9pa5Tk5BDpvLkCCFVhRLHhFMwhMs4SQ&usqp=CAU&ec=48665701" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjRIBHlD4tFKGm6GXGg0s71eI7mjBHDg6IQZbajdNIzg&usqp=CAU&ec=48665701" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJCptNObUYOdv7P5zAT-8lLwMo2MBzouzajz83Vk23l0dczJe9MAw3khhMVwSDYJc-NVSUyarYhQ&usqp=CAU&ec=48665701" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZdSji_YSu8Lk72uUcrG8NyuXynMosfNOVNCYGt5FjQ&usqp=CAU&ec=48665701" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOcrN_wugapKvEsw0z1x1JciO1IQLgrA-QHSu8Aze2Gg&usqp=CAU&ec=48665701" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTkrlJWtO6yKFCjrX9cCSx1BQYdlIYj4qHvqSqBZVvw&usqp=CAU&ec=48665701" alt="" />
        </Wrap>
        
      </Content>
      <h4>Web Series</h4>
      <Content>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5w-yk37G_M4HsVQRS_BloJBK7nMuka6Zz-R4qVY0vg&usqp=CAU&ec=48665701" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKjprwoc5pqWym1Sf0Ax94ljc7oHch6-HmJGszflf_Q&usqp=CAU&ec=48665701" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3l3Mq-uvZasymGTZI8FJBV9BfT8RCRESti84Q_CnTIw&usqp=CAU&ec=48665701" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjJcGhaJ-49btZPDONo2-K56YrbbFHq4m2k4XyyPDhg&usqp=CAU&ec=48665701" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCnslMmgdZsKxCtBeK2yh3Md3pKD6BhH--rLbDiTMfw&usqp=CAU&ec=48665701" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQt5HPfZs_2y4JD_z3g_ZU3UNIAZ3ffibxZ2Z6A5hN1A&usqp=CAU&ec=48665701" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPN5lWJ_A1s6lxMMoJwf78gJVC-5LrV_wrOdw5l84rJA&usqp=CAU&ec=48665701" alt="" />
        </Wrap>
        
      </Content>
    </Container>
  )
}
const Container=styled.div`
margin-left:2px;
background: url('/images/home-background.png') no-repeat center center/cover fixed ;
height: 100vh;
top:0px;
left:0px;
width: 100%;
z-index: -1;
opacity: 0.9;
 h4{
    margin-left:10px;
  
 }
`
const Content=styled.div`
margin-top:10px;
display:grid;
grid-gap:5px;
grid-template-columns:repeat(7,minmax(0,1fr));

`
const Wrap=styled.div`
border-radius:10px;
overflow:hidden;
border: 2px solid rgb(249,249,249,0.1);
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