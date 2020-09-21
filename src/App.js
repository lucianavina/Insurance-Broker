import React from 'react';
import Header from './Components/Header/index'
import Form from './Components/Form/index'

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
  return (
    <Container>
      
      <Header
        
        title = 'Cotizador de Seguros'
      />
      <FormConatainer>
          <Form/>
      </FormConatainer>
      </Container>
  );
}

export default App;
