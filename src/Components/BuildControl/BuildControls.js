import classes from './BuildControls.module.css'
import Control from './Control'
import { OrderModal } from '../index'

const LABEL_TO_TYPE = [
    { label:'Meat', type:'meat' },
    { label:'Cheese', type:'cheese' },
    { label:'Salad', type:'salad' },
    { label:'Bacon', type:'bacon' }
]

const BuildControls = props => {

    const ingredientControls = LABEL_TO_TYPE.map((item,i) => {
        return <Control 
            key={i} 
            label={item.label} 
            isDisabled={props.isDisabled[item.type]}
            onMore={() => props.addIngredient(item.type)} 
            onLess={() => props.removeIngredient(item.type)} />
    })

    return (
        <div className={classes.BuildControls}>
            <h3 className={classes.Heading}>Build Controls</h3>
            <h5>The Total Price is $ {props.totalPrice}</h5>
                {ingredientControls}
            <OrderModal ingredients={props.ingredients} totalPrice={props.totalPrice} orderIsDisabled={props.orderIsDisabled} />
        </div>
    )
}

export default BuildControls