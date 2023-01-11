import React from 'react'
import styled from 'styled-components'
import { cardShadow,hoverEffect,themeColor } from './utils';
import andy from "../assets/andy.jpg"


const Project = () => {
  return (
    <YourProject>
        <Projects>
            <Avatar>
                <img src={andy} alt=''/>
            </Avatar>
            <Detail>
                <Title>log of bankery</Title>
                <SubTitle>1 day remaining</SubTitle>
            </Detail>
        </Projects>
        <Project>
            <Avatar>
                <img src={andy} alt=''/>
            </Avatar>
            <Detail>
                <Title>personal breading projects</Title>
                <SubTitle>5 day remaining</SubTitle>
            </Detail>
        </Project>
        <AllProjects>See all projects</AllProjects>
    </YourProject>
  )
}
const YourProject=styled.div`
height:70;
background-color:white;
margin:0;
padding:1rem;
border-radius:1rem;
box-shadow:${cardShadow};
transition:0.4s ease-in-out;
&:hover{
  box-shadow:${hoverEffect}
}
`
const Projects=styled.div ` 
display:flex;
align-items:center;
margin-bottom:0.3rem; 
`
const Avatar=styled.div`
img{
  height:4rem;
  width:4rem;
  border-radius:4rem;
}
`
const Detail=styled.div`
margin-left:0;

`
const Title=styled.h3`
font-weight:500;
`
const SubTitle=styled.h5`
font-weight:300;
`
const AllProjects=styled.h5`
text-algin:end;
color:${themeColor};
cursor:pointer;
`

export default Project