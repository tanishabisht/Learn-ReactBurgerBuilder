import classes from './Order.module.css'

const Order = props => {
    
    var ingredients = []
    for (let ig in props.ord.ingredients) ingredients.push([ig, props.ord.ingredients[ig]])

    return (
        <div className={classes.OrderContainer}>
            <span>
                INGREDIENTS: {ingredients.map(ig => <span key={ig[0]} className={classes.IngredientPill}>{ig[0]}:{ig[1]}</span>)}
            </span>
            <p>PRICE: <strong>$ {props.ord.price}</strong></p>
        </div>
    )
}

export default Order