import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Burger, BuildControls } from '../Components'
import { Orders, Checkout } from './'

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
    ingredients={ingredients} 
    totalPrice={totalPrice} 
    addIngredient={addIngredientHandler} 
    removeIngredient={removeIngredientHandler}
    isDisabled={isDisabled}
    orderIsDisabled={orderIsDisabled}
  />


  return(
    <div className='row' style={{margin:0}}>
      <div style={{minHeight:'91vh'}} className='col m7 teal lighten-2 valign-wrapper'>{lComponent}</div>
      <div style={{minHeight:'91vh'}} className='col m5 teal lighten-1 valign-wrapper'>
        <Switch>
          <Route path='/' exact>{rComponent}</Route>
          <Route path='/order' exact><Orders/></Route>
          <Route path='/checkout' exact><Checkout/></Route> 
        </Switch>
      </div>                
    </div>
  )
}

export default BurgerBuilder