import { ActionTypes } from '../action'

const initState = {
    orders: [],
    error: null
}

const orderReducer = (state=initState, {type, payload}) => {
    switch(type){
        case ActionTypes.GET_ORDERS_SUCCESS:
            return {
                ...state,
                orders: payload,
                error: null
            }
        case ActionTypes.GET_ORDERS_FAILED:
            return {
                ...state,
                // orders: [],
                error: payload
            }
        case ActionTypes.ADD_ORDERS_SUCCESS:
            const newOrder = {...payload.ordData, id:payload.id}
            return {
                ...state,
                orders: state.orders.concat(newOrder),
                error: null
            }
        case ActionTypes.ADD_ORDERS_FAILED:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}

export default orderReducer