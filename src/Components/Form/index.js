import React, {useState} from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { getPriceYear, calulateBrand, getPlan } from '../../Helper/index'



const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;

`
const Label = styled.label`
flex: 0 0 100px;
`
const Select = styled.select`
display:block-size;
width:100%;
padding: 1rem;
border: 1px solid #e1e1e1;
--webkit-appearance: none
`
const InputRadio = styled.input`
margin: 0 1rem
`

const Button = styled.button`
background-color: #00838f;
font-size: 16px;
width: 100%;
padding:1rem;
color: #fff;
text-transform: uppercase;
font-weight: bold;
border: none;
transition: background-color .3s ease;
margin-top: 2rem;

&:hover {
    cursor: pointer;
    background-color: #26C6DA
}
`

const Error = styled.div`
background-color: red;
color: white;
padding: 1rem;
width: 100%;
text-align: center;
margin-bottom: 2rem

`

const Form = ({saveSummary, saveLoading}) => {

    const [data, saveData] = useState({
        brand: '',
        year: '',
        plan: ''
    })
    
    const [error, saveError] = useState(false)

    //get values from State
    const { brand, year, plan } = data
    
    //read data from the form

    const getInfromation = e => {
        saveData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
 // OnSubmit
    
    const getPrice = e => {
        e.preventDefault()

        if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            saveError(true)
            return
        } saveError(false)

         // base year 2000
        let result = 2000
        
        // get different value for each year
        
        const difference = getPriceYear(year)
        
        
        //substract 3% for each year
        result -= ((difference * 3) * result) / 100
        
        //American plus 15%, Asian plus 5% and European 30%
        
        result = calulateBrand(brand) * result
        
        
        // Basic plan increases 20% or Full plan increases 50%
        
        const increasedPlan = getPlan(plan)
        result = parseFloat(increasedPlan * result).toFixed(2)
        
        saveLoading(true)
        
        setTimeout(() => {

            //Stops the spinner

            saveLoading(false)

            //Get the information
            
            saveSummary({
                quotation: Number(result),
                data
            })
                   
        }, 3000)


       
    
        //Total
    }

   




    return ( 

        <form
            onSubmit={getPrice}
        >
            
            {error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Field>
                <Label>Marca</Label>
                <Select
                    name='brand'
                    value={brand}
                    onChange={getInfromation}
                >
                        <option value=''>--Seleccione--</option>
                        <option value='americano'>Americano</option>
                        <option value='europeo'>Europeo</option>
                        <option value='asiatico'>Asiatico</option>
                    </Select>
                
            </Field>
            <Field>
                <Label>Año</Label>
                <Select
                    name='year'
                    value={year}
                    onChange={getInfromation}
                >                        
                        <option value="">-- Seleccione --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </Select>              
            </Field>
            <Field>
                <Label>Plan</Label>
                <InputRadio
                    type='radio'
                    name='plan'
                    value='basic'
                    checked={plan === 'basic'}
                    onChange={getInfromation}
                /> Básico

                <InputRadio
                    type='radio'
                    name='plan'
                    value='full'
                    checked={plan === 'full'}
                    onChange={getInfromation}
                    /> Completo
            </Field>

            <Button type='submit'>Cotizar</Button>
        </form>
     );
}

Form.propTypes = {
    saveSummary: PropTypes.func.isRequired,
    saveLoading: PropTypes.func.isRequired
}
 
export default Form;