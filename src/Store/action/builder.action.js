import { ActionTypes } from './'

export const addIngredient = ing => {
    return {
        type: ActionTypes.ADD_INGREDIENT,
        payload: ing
    }
}

export const removeIngredient = ing => {
    return {
        type: ActionTypes.REMOVE_INGREDIENT,
        payload: ing
    }
}