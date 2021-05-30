import { useState } from 'react'
import { Layout } from '../Container'
import { Burger } from '../Components'

const rComponent=<h1>HI PEOPLEeeee! I AM THE RIGHT COMPONENT</h1>

const BurgerBuilder = props => {

  const [ingredients, setIngredients] = useState({ meat: 10, cheese: 0, salad: 0, bacon: 0 })

  return (        
    <Layout lComponent={<Burger ingredients={ingredients} />} rComponent={rComponent} />
  )
}

export default BurgerBuilder