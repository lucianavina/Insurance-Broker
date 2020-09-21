import React from 'react';
import styled from '@emotion/styled'
import {firstLetterUpperCase} from '../../Helper/index.js'

const SummaryContainer = styled.div`
padding: 1rem;
text-align: center;
background-color: #00838F;
color: #FFF;
margin-top: 1rem
`

const Summary = ({ data }) => {
    //get data

    const { brand, year, plan } = data
    
    if (brand === '' || year === '' || plan === '') return null
    return ( 
        <SummaryContainer>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {firstLetterUpperCase(brand)} </li>
                <li>Plan: {firstLetterUpperCase(plan)} </li>
                <li>Año del auto: {year} </li>
            </ul>
        </SummaryContainer>
     );
}
 
export default Summary;