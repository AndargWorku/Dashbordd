import React from 'react'
import { cardShadow,hoverEffect,themeColor,darkThemeColor } from './utils'
import styled from 'styled-components'
import { FaSlack } from 'react-icons/fa'
const Andarg = () => {
  return (
    <Chanel>
        <CardContent>
            <Slack>
                <SlackLogo>
                    <FaSlack/>
                </SlackLogo>
                <SlackText>
                    <SlackHead>engage with clients</SlackHead>
                    <Foot>join andarg Slack</Foot>
                </SlackText>
            </Slack>
            <SlackJoin>join now</SlackJoin>
        </CardContent>
      
    </Chanel>
  )
}
const Chanel=styled.div`
background-color:${darkThemeColor};
height:50%;
margin-top:6.5rem;
border-radius:1rem;
display:flex;
align-items:center;
transition:0.4s ease-in-out;
&:hover{
    box-shadow:${hoverEffect}
}
`
const CardContent=styled.div`
margin:1rem;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;

`
const Slack=styled.div`
display:flex;
`
const SlackLogo=styled.div`
margin-right:0.7rem;
display:flex;
align-items:center;
justify-content:center;
svg{
    height:3rem;
    width:3rem;
    color:white;
}
`
const SlackHead=styled.div`
font-weight:500;

`
const SlackJoin=styled.button`
background-color:${themeColor};
border:none;
outline:none;
padding:1rem 2rem;
color:white;
border-radius:0.5rem;
font-size:1.2rem;
font-weight:bold;
cursor:pointer;

`
const SlackText=styled.div`
color:white;
`
const Foot=styled.div`
color:#e4e4e4;
font-weight:normal;
`

export default Andarg
