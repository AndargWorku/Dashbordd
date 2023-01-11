import React from 'react'
import styled from 'styled-components'
import { cardShadow,hoverEffect } from './utils'
import Badge from "./Badge"
import andy from "../assets/andy.jpg"

const Invoices = () => {
  return (
    <InvoicesContainer>
        <CardContent>
            <Invoice>
                <Info>
                    <Avatar>
                        <img src={andy} alt=''/>
                    </Avatar>
                    <TextContainer>
                        <Title>Andarg Worku</Title>
                        <SubTitle>ABC Holding</SubTitle>
                    </TextContainer>
                </Info>
                <Container>
                    <Badge content='paid' paid/>
                    <Price>$12000.85</Price>
                </Container>
            </Invoice>
            <Invoice>
                <Info>
                    <Avatar>
                        <img src={andy} alt=''/>
                    </Avatar>
                    <TextContainer>
                        <Title>Andarg Worku</Title>
                        <SubTitle>ichor association</SubTitle>
                    </TextContainer>
                </Info>
                <Container>
                    <Badge content='paid' paid/>
                    <Price>$12000.85</Price>
                </Container>
            </Invoice>
        </CardContent>
    </InvoicesContainer>
  )
}
const InvoicesContainer=styled.div`
width:35rem;
border-radius:1rem;
margin-top:1rem;
background-color:white;
height:140%;
box-shadow:${cardShadow};
transition:0.4s ease-in-out;
&:hover{
  box-shadow:${hoverEffect}
}
`
const CardContent=styled.div`
`
const Invoice=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin:0.4rem;
padding-top:0.6rem;
`
const Info=styled.div`
display:flex;
align:items:center;
width:50%;
`
const Avatar=styled.div`
img{
    height:3.5rem;
    width:3.5rem;
    border-radius:3.5rem;
}
`
const TextContainer=styled.div`
margin-left:1rem;
`
const Title=styled.div`
`
const SubTitle=styled.div`
font-weight:400;
`
const Container=styled.div`
display:flex;
align-items:center;
width:30%;
justify-content:space-between;
`
const Price=styled.div`
`
export default Invoices