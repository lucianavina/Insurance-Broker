import React, {useState} from 'react';
import Header from './Components/Header/index'
import Form from './Components/Form/index'
import Summary from './Components/Summary/index'
import Result from './Components/Result/index'


import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto
`

const FormConatainer = styled.div`
background-color: #FFF;
padding: 3rem
`

function App() {

  const [summary, saveSummary] = useState({
    quotation: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  })
  
  //get data

  const {data, quotation} = summary

  return (
    <Container>
      
      <Header
        
        title = 'Cotizador de Seguros'
      />
      <FormConatainer>
        <Form
          saveSummary={saveSummary}

        />
        <Summary 
          data={data}
        />
        <Result 
          quotation={quotation}
        />
        
      </FormConatainer>
      </Container>
  );
}

export default App;
