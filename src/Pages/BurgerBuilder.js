import { useState } from 'react'
import { Layout } from '../Container'
import { Burger, BuildControls } from '../Components'

const INGREDIENT_PRICES = {
  meat: 2,
  cheese: 1, 
  salad: 1, 
  bacon: 3 
}

const BurgerBuilder = () => {


  const [ingredients, setIngredients] = useState({ meat: 0, cheese: 0, salad: 0, bacon: 0 })
  const [totalPrice, setTotalPrice] = useState(4)


  const addIngredientHandler = type => {
    const oldCount = ingredients[type]
    const newCount = oldCount + 1
    const newIngredientList = {...ingredients}
    newIngredientList[type] = newCount
    setIngredients(newIngredientList)
    const priceAdded = INGREDIENT_PRICES[type]
    setTotalPrice(prev => prev+priceAdded)
  }

  const removeIngredientHandler = type => {
    var oldCount = ingredients[type]
    if(oldCount>0){
      const newCount = oldCount-1
      const newIngredientList = {...ingredients}
      newIngredientList[type] = newCount
      setIngredients(newIngredientList)
      const priceRemoved = INGREDIENT_PRICES[type]
      setTotalPrice(prev => prev-priceRemoved)
    }
  }

  const isDisabled = {...ingredients}
  for (let ig in isDisabled) isDisabled[ig] = isDisabled[ig] <= 0

  const orderIsDisabled = Object.values(ingredients).reduce((prev,cur) => prev+cur) <= 0


  const lComponent = <Burger ingredients={ingredients} />

  const rComponent = <BuildControls 
    totalPrice={totalPrice} 
    addIngredient={addIngredientHandler} 
    removeIngredient={removeIngredientHandler}
    isDisabled={isDisabled}
    orderIsDisabled={orderIsDisabled}
  />


  return <Layout lComponent={lComponent} rComponent={rComponent} />
}

export default BurgerBuilder