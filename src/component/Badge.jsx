import React from 'react'
import styled from 'styled-components'
import {themeColor} from "./utils";
// import { themeColor } from './utils'

const Badge = ({content,glow=false,clean=false,paid=false,late=false}) => {
  return (
    <Div glow={glow} clean={clean} paid={paid} late={late}>{content}</Div>
  )
}
const Div=styled.div`
padding:0.3rem 1rem;
border-radius:1rem;
font-weight:500;

color:white;
background-color:${themeColor};
cursor:pointer;
${({clean})=>
  clean &&
  `
  color:${themeColor};
  border-radius:0.05rem solid ${themeColor};
  background-color:transparent;
`}
${({glow})=>
  glow &&
  `font-size:0.8rem;
  padding:0.2rem 0.5rem;
  font-weight:normal;
  color:#2f233d;
  background-color:rgba(109,134,245,0.192);
`}
${({paid})=>
  paid &&
  `
  color:#70e000;
  background-color:#70e0041;
`}
${({late})=>
  late &&
  `
  color:#ff595e;
  background-color:#ff595e41;
`}


`

export default Badge