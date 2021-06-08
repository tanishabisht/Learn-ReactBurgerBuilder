import { useState } from 'react'
import { objToArr } from '../Helper/javascript.functions'
import { Input } from '../UI'
import classes from './FormPage.module.css'



const initialState = {
    name: {
        elementType: 'input',
        elementConfig: { type:'text', placeholder:'Enter your name ...' },
        value: '',
        validation: {
            required: true,
            minLength: 3
        },
        valid: false,
        touched:false
    },
    street: {
        elementType: 'input',
        elementConfig: { type:'text', placeholder:'Enter steet name ...' },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched:false
    },
    zipCode: {
        elementType: 'input',
        elementConfig: { type:'text', placeholder:'Enter ZIP code ...' },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched:false
    },
    country: {
        elementType: 'input',
        elementConfig: { type:'text', placeholder:'Enter country name ...' },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched:false
    },
    email: {
        elementType: 'input',
        elementConfig: { type:'email', placeholder:'Enter your email id ...' },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched:false
    }
}



const FormPage = () => {    

    const [orderForm, setOrderForm] = useState(initialState)
    const formElemArr = objToArr(orderForm)

    const checkValidity = (val, rule) => {
        let isValid = true
        if(rule.required) isValid = val.trim() !== '' && isValid
        if(rule.minLength) isValid = val.length >= rule.minLength && isValid
        return isValid
    }

    const inputChangeHandler = (e, inpIdentifier) => {
        const updatedForm = { ...orderForm}
        updatedForm[inpIdentifier].value = e.target.value
        updatedForm[inpIdentifier].valid = checkValidity(updatedForm[inpIdentifier].value, updatedForm[inpIdentifier].validation)
        updatedForm[inpIdentifier].touched = true
        setOrderForm(updatedForm)
    }

    const submitHandler = e => {
        e.preventDefault()
        console.log(orderForm)
    }

    return (
        <div className={`container teal-text lighten-2 ${classes.CenterContent}`}>
            <h1>FORM PAGE</h1>
            <form onSubmit={submitHandler}>
                {formElemArr.map(formElem => <Input key={formElem.id} 
                    valid={formElem.valid} shouldValidate={formElem.validation} touched={formElem.touched}
                    elementType={formElem.elementType} elementConfig={formElem.elementConfig} 
                    value={formElem.value} onChange={e => inputChangeHandler(e,formElem.id)} />)}
                <br/><br/><br/><button className='btn waves-effect waves-light' type="submit">SUBMIT</button>
            </form>
        </div>
    )
}


export default FormPage