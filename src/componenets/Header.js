import React from 'react'
import styled from 'styled-components'
export default function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg "/>
      <NavMenu>
         <a>
            <img src="/images/home-icon.svg" alt="" />
            <span>HOME</span>
            
         </a>
         <a>
            <img src="/images/search-icon.svg" alt="" />
            <span>SEARCH</span>
         </a>
         <a>
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>WATCHLIST</span>
         </a>
         <a>
            <img src="/images/original-icon.svg" alt="" />
            <span>ORIGINALS</span>
         </a>
         <a>
            <img src="/images/movie-icon.svg" alt="" />
            <span>MOVIES</span>
         </a>
         <a>
            <img src="/images/series-icon.svg" alt="" />
            <span>WEBSERIES</span>
         </a>
      </NavMenu>
      <UserImg src="/images/userimg.png"/>

    </Nav>
  )
}
const Nav = styled.div`
  height:70px;
  background:#1c1c1b;
  display:flex;
  
  align-items:center;
  padding:0 36px;
  overflow:hidden;
`
const Logo =styled.img`
   width:80px;
`
const NavMenu=styled.div`
  display:flex;
  flex:1;
  margin-left:30px;
  align-items:center;
  a{
    display:flex;
    cursor:pointer;
    align-items: center;
    padding: 0 12px;
    img{
        height:20px;
    }
    span{
        font-size:13px;
        letter-spacing:1.42px;
        
        &:hover
        {
         
         
         color:gold;
        }
    }
    
  }
`
const UserImg=styled.img`
width:48px;
height:48px;
border-radius: 50%;
cursor:pointer;
`