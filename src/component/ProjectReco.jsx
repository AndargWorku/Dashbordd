import React from 'react'
import styled from 'styled-components'
import { cardShadow,hoverEffect } from './utils'
import Badge from "./Badge"
import andy from "../assets/andy.jpg"
import Info from './Info'
const ProjectReco = () => {
  return (
    <ProjectRecos>
        <CardContent>
            <Detail>
                <InfoContainer>
                    <Avatar>
                        <img src='' alt=''/>
                    </Avatar>
                    <Info>
                        <InfoName>ANdarg Worku</InfoName>
                        <InfoUpdate>update 10 min ago</InfoUpdate>
                    </Info>
                </InfoContainer>
                <Badge content="design"/>

            </Detail>
            <Title>need a design to form a essential for my business </Title>
            <ProjectInfo>
                Looking for a talented brand design for  to create all design for the branding design for all material start up
            </ProjectInfo>
            <PriceContainer>
                <Price>$8700/month</Price>
                <Badge content="Full time" clean/>
            </PriceContainer>
        </CardContent>

    </ProjectRecos>
  )
}
const ProjectRecos=styled.div`
border-radius:1rem;
height:130%;
padding:1rem;
background-color:white;
width:27.5vw;

box-shadow:${cardShadow};
transition:0.4s ease-in-out;
&:hover{
  box-shadow:${hoverEffect}
}

`
const CardContent=styled.div`
margin:0.4rem;

`
const Detail=styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`
const InfoContainer=styled.div`
display:flex;
align-items:center;

`
const Avatar=styled.div`
margin-right:1rem;
img{
    height:5rem;
    border-radius:5rem;
}
`

const InfoName=styled.h3`
font-weight:500;
`
const InfoUpdate=styled.h5`
font-weight:300;
`
const Title=styled.h4`
font-weight:500;
`
const ProjectInfo=styled.p`
margin:0;
padding:0;
font-size:0.9rem;
color:#3b3b3b;
margin-bottom:0.5rem;
`
const PriceContainer=styled.div`
display:flex;
align-items;
justify-content:space-between;
margin:0 1rem;
padding:0.5rem 1rem;
border-radius:1rem;
background-color:rgba{146,166,255,0.3};
`
const Price=styled.div`
`

export default ProjectReco;