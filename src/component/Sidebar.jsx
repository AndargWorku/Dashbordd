import React from 'react'
import styled from 'styled-components'
import Badge from './Badge'
import {RiHomeLine ,RiFileCopyLine} from "react-icons/ri";
import andy from "../assets/andy.jpg"
import {AiOutlinePieChart} from "react-icons/ai"
import {FaWallet} from "react-icons/fa"
import { darkThemeColor } from './utils'

const Sidebar = () => {
  return (
    <Container>
        <profileContainer>
            <Avatar src={andy} />
            <Name>Andarg worku</Name>
            <Badge content="pro level"/>
        </profileContainer>
        <LinksContainer>
        <Links>
        <Link>
        <RiHomeLine/>
        <h3>dashboard</h3>
        </Link>
        <Link>
        <RiFileCopyLine/>
        <h3>projects</h3>
        </Link>
        <Link>
        <FaWallet/>
        <h3>Invoices</h3>
        </Link>
        <Link>
        <AiOutlinePieChart/>
        <h3>reports</h3>
        </Link>
        </Links>
        <ContactContainer>
            <span>havening trouble</span>
            <a href='#'>contact us</a>
        </ContactContainer>
        </LinksContainer>
    </Container>
  )
}
const Container =styled.div`
width:20%;
height:100% !important;
border-radius:2rem;
background-color:#091322;
display:flex;
flex-direction:column;
align-items:center;
gap:3rem;


`
const profileContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Avatar=styled.img`
height:7rem;
border-radius:6rem;
margin-top:20%;
`
const Name=styled.h3`
color:white;
font:0.5rem;
font-weight:400;
margin:0.8rem 0 0.5rem 0;

`
const LinksContainer=styled.div`
background-color:${darkThemeColor};
height:100%;
width:100%;
border-radius:2rem;

`
const Links=styled.ul`
list-style-type:none;
display:flex;
flex-direction:column;
padding-top:2rem;
height:60%;

`
const Link=styled.li`
margin-left:25%;
margin-bottom:2rem;
display:flex;
gap:1;
color:#e4e4e4;
cursor:pointer;
h3{
    font-weight:300;

}
svg{
    font-size:1.1rem;
    margin-top:3%;
}
`
const ContactContainer=styled.div`
width:60%;
background-color:#091322;
color:#c4c4c4;
height:15%;
border-radius:1.1rem;
display:flex;
margin:auto auto;
flex-direction:column;
padding:1rem;
a{
    color:white;
    text-decoration:none;
}
`


export default Sidebar