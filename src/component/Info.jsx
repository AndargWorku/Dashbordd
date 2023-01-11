import React from 'react'
import styled from 'styled-components'
import { cardShadow,hoverEffect,themeColor } from './utils'
import Badge from "./Badge"

const Info = () => {
  return (
    <InfoCard>
        <Card>
            <CardContent>
                <Row>
                    <Digit>
                        98
                    </Digit>
                    <InfoContainer>
                        <Title>
                            Rank
                        </Title>
                        <SubTitle>in top 20%</SubTitle>
                    </InfoContainer>
                </Row>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Row>
                    <Digit>
                        32
                    </Digit>
                    <InfoContainer>
                        <Title>
                            projects
                        </Title>
                        <SubTitle>8 in this months</SubTitle>
                    </InfoContainer>
                </Row>
                <Row>
                    <Badge content="mobile app"glow/>
                    <Badge content="branding" glow/>
                </Row>
            </CardContent>
        </Card>
    </InfoCard>
  )
}
const InfoCard=styled.div`
height:100%;
width:14rem;
background-color:white;
border-radius:1rem;
color:white;
padding:1rem;
box-shadow:${cardShadow}
translation:0.4s ease-in-out;
&:hover{
  box-shadow:${hoverEffect};
}

`
const Card=styled.div`
background-color:rgba(183,194,243,0.3);
border-radius:1rem;
margin-bottom:1rem;
`
const CardContent=styled.div`
padding:0.7rem 1rem 0.3rem 1rem;

`
const Row =styled.div`
display:flex;
align-items:center;
margin-bottom:0.4rem;
&{({justify})=>
justify&&
'
justify-content:space-around;
width:90%;
'
}
`
const InfoContainer=styled.div`
margin-left:0.7rem;
`
const Digit=styled.div`
background-color:${themeColor};
font-size:0.3rem;
padding:0.8rem 1rem;
border-radius:1rem;
`
const Title=styled.h3`
color:black;
`
const SubTitle=styled.h5`
color:#333333;
font-weight:normal;

`

export default Info
