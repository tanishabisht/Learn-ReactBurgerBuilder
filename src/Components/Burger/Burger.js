import classes from './Burger.module.css'
import Ingredient from './Ingredient'

const Burger = props => {

  const IngridientComponents = Object.keys(props.ingredients).map(ig => {
    return [...Array(props.ingredients[ig])].map((val,i) => {
      return <Ingredient key={ig+i} type={ig} />
    })
  })

  const reducedArr = IngridientComponents.reduce((prev,next) => [...prev, ...next], [])
  
    return (        
      <div className={classes.Burger}>
        <Ingredient type='bread-top' />
        {reducedArr.length?IngridientComponents:<h5>Start Adding your Ingredients !!</h5>}
        <Ingredient type='bread-bottom' />
      </div>
    )
}

export default Burger