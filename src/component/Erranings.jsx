import React from 'react'
import styled from 'styled-components'
import {IoStatsChart} from "react-icons/io5"
import { themeColor,hoverEffect } from './utils'

const Earnings = () => {
  return (
    <EarningsCard>
        <CardContent>
            <Chart>
                <IoStatsChart/>
            </Chart>
            <EarringsText>Errangs</EarringsText>
            <Earning>$7.8950</Earning>
            <EarringsIncrease>=10% science last months</EarringsIncrease>
        </CardContent>
      
    </EarningsCard>
  )
}
const EarningsCard=styled.div`
height:100%;
width:14rem;
background-color:${themeColor};
padding:1rem;
border-radius:1rem;
color:white;
translation:0.4s ease-in-out;
&:hover{
  box-shadow:${hoverEffect};
}

`
const CardContent=styled.div`
margin:1rem;
`
const Chart=styled.div`
display:flex;
justify-content:center;
svg{
  height:4rem;
  width:4rem;
}

`
const Earning=styled.h3`
text-align:center;
font-weight:normal;
padding:0.4rem 0;
`
const EarringsText=styled.h2`
text-align:center;
`
const EarringsIncrease=styled.h5`
text-align:center;
font-weight:normal;
background-color:rgba(0,0,0,0.2);
padding:0.1rem;
border-radius:2rem;
`

export default Earnings
