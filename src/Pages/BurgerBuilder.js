import { Switch, Route } from 'react-router-dom'
import { Burger, BuildControls } from '../Components'
import { Orders, Checkout } from './'
import { useDispatch, useSelector } from 'react-redux'
import { addIngredient, removeIngredient } from '../Store/action'
import classes from './FormPage.module.css'

const BurgerBuilder = () => {

  const ingredients = useSelector(state => state.ing.ingredients)
  const dispatch = useDispatch()


  const addIngredientHandler = type => dispatch(addIngredient(type))
  const removeIngredientHandler = type => dispatch(removeIngredient(type))


  const isDisabled = {...ingredients}
  for (let ig in isDisabled) isDisabled[ig] = isDisabled[ig] <= 0
  const orderIsDisabled = Object.values(ingredients).reduce((prev,cur) => prev+cur) <= 0



  const lComponent = <Burger ingredients={ingredients} />

  const rComponent = <BuildControls
    addIngredient={addIngredientHandler} 
    removeIngredient={removeIngredientHandler}
    isDisabled={isDisabled}
    orderIsDisabled={orderIsDisabled}
  />



  return(
    <div className='row' style={{margin:0}}>
      <div style={{minHeight:'92vh', height:'100%'}} className='col m7 teal lighten-2 valign-wrapper'>{lComponent}</div>
      <div style={{height:'92vh', overflow:'scroll'}} className={`col m5 teal lighten-1 ${classes.CenterContent}`}>
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