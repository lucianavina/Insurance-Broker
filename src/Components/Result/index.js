import React from 'react';
import styled from '@emotion/styled'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Message = styled.p`
background-color: rgb(127,224,237);
margin-top: 2rem;
padding: 1rem;
text-align:center
`

const QuotationResult = styled.div`
text-align: center;
padding: 5rem;
border: 1px solid #26C6DA;
background-color: rgb(127,224,237);
margin-top: 1rem;
position: relative
`


const TextQuotation = styled.p`
color: #00838F;
padding: 1rem;
text-transform: uppercase;
font-weight: bold;
margin: 0
`

const Result = ({ quotation }) => {
    
    

    return ( 
        (quotation === 0) ?
            <Message>Elige marca, año y tipo de seguro</Message>
            : (<QuotationResult>
                
                <TransitionGroup
                    component='p'
                    className='resultado'
                >
                    <CSSTransition
                        classNames='resultado'
                        key={quotation}
                        timeout = {{ enter: 500, exit:500 }}
                    >
                        <TextQuotation>El total el: ${quotation}</TextQuotation>
                    </CSSTransition>
                </TransitionGroup>
                
            </QuotationResult> )

     );
}
 
export default Result;