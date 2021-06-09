import { ActionTypes } from '../action'

const INGREDIENT_PRICES = {
    meat: 2,
    cheese: 1, 
    salad: 1, 
    bacon: 3 
}

const initState = {
    ingredients: { meat: 0, cheese: 0, salad: 0, bacon: 0 },
    totalPrice: 4
}

const builderReducer = (state=initState, {type, payload}) => {
    switch(type){
        case ActionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [payload]:state.ingredients[payload]+1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[payload]
            }
        case ActionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [payload]:state.ingredients[payload]-1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[payload]
            }
        default:
            return state
    }
}

export default builderReducer