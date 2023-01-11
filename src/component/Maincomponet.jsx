import React from 'react'
import styled from 'styled-components'
import Andarg from './Andarg'
import Earnings from './Erranings'
import Info from './Info'
import Invoices from './Invoices'
import Navbar from './Navbar'
import Project from './Project'
import ProjectReco from './ProjectReco'
const Maincomponet = () => {
  return (
    <Container>
        <Navbar/>
        <SubContainer>
            <SectionOne1>
                <ColumnOne1>
                <Earnings/>
                <Info/>
                </ColumnOne1>
                <ColumnTwo1>
                <TitleText>your projects</TitleText>
                <Project/>
                </ColumnTwo1>
            </SectionOne1>
            <SectionTwo>
                <ColumnOne2>
                <InvoiceContainer>
                  <TitleText>Recent invoices</TitleText>
                  <Invoices/>
                  </InvoiceContainer>
                  <Andarg/>
                  </ColumnOne2>
                <ColumnTwo2>
                <TitleText>Project Recomadtion</TitleText>
                <ProjectReco/>
                  </ColumnTwo2>
            </SectionTwo>
        </SubContainer>
    </Container>
  )
}
const Container=styled.div`
width:80%;
background:linear-gradient(to bottom right white 0%right #e6e4ff);
border-top-right-radius:2rem;
border-bottom-right-radius:2rem;
margin:1rem 8rem 1rem 4rem;
@media screen and(min-width:320px) and(max-width:1080px){
  display:flex;
  flex-direction:column;
  width:100%;
  margin:1rem 0 0 0;
  }
`
const TitleText=styled.h3`
height:20%;
`
const SubContainer=styled.div`
margin:0.5rem 0;
height:80%;
width:100%;
display:flex;
flex-direction:column;
gap:4rem;
@media screen and(min-width:320px) and(max-width:1080px){
  height:100%;
}
`
const SectionOne1=styled.div`
display:flex;
justify-content:space-between;
height:40%;
gap:2rem;
width:100%;
@media screen and(min-width:320px) and(max-width:1080px){
  flex-direction:column;
  align-items:center;
  height:max-contact;
  justify-content:center;
  align-items:center;
  gap:1rem;
  width:100%;
}
`
const ColumnOne1=styled.div`
display:flex;
gap:3rem;
`
const ColumnOne2=styled.div`
`
const InvoiceContainer=styled.div`
height:60%;
`
const ColumnTwo1=styled.div`
display:flex;
flex-direction:column;
height:115%;
width:100%; 
`
const ColumnTwo2=styled.div`
`
const SectionTwo=styled.div`
display:flex;
gap:26vh;
gap:2rem;
`
export default Maincomponet