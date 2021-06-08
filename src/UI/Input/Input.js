import React from 'react'

const Input = props => {

    const { elementType, elementConfig, value, valid, shouldValidate, touched, onChange } = props
    let inpElement = null

    let classes = null
    if(!valid && shouldValidate && touched) classes='invalid'


    switch(elementType){
        case 'input':
            inpElement = <input className={classes} {...elementConfig} value={value} onChange={onChange} />
            break
        case 'textarea':
            inpElement = <textarea className={`${classes} materialize-textarea`} {...elementConfig} value={value} onChange={onChange} />
            break
        default:
            inpElement = <input className={classes} {...elementConfig} value={value} onChange={onChange} />
    }


    return (
        <React.Fragment>
            {inpElement}
        </React.Fragment>
    ) 
}

export default Input


// {elementConfig.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}