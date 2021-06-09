import { ActionTypes } from './'
import axios from '../../Config/axios-order'


// GET ORDERS

const setOrdersSuccess = ord => {
    return {
        type: ActionTypes.GET_ORDERS_SUCCESS,
        payload: ord
    }
}

const setOrdersFailed = err => {
    return {
        type: ActionTypes.GET_ORDERS_FAILED,
        payload: err
    }
}

export const getOrders = () => {
    return dispatch => {
        axios.get('order.json')
        .then(res => {
            var dataVar = []
            for (let key in res.data) dataVar.push({...res.data[key], id:key})
            console.log(dataVar)
            dispatch(setOrdersSuccess(dataVar))
        })
        .catch(err => dispatch(setOrdersFailed(err)))
    }
}





// POST ORDER

const addOrderSuccess = (id, ordData) => {
    return {
        type: ActionTypes.ADD_ORDERS_SUCCESS,
        payload: {id,ordData}
    }
}

const addOrderFailed = err => {
    return {
        type: ActionTypes.ADD_ORDERS_FAILED,
        payload: err
    }
}

export const addOrder = data => {
    return dispatch => {
        axios.post('/order.json', data)
            .then(res => dispatch(addOrderSuccess(res.data.name, data)))
            .catch(err => dispatch(addOrderFailed(err)))
    }
}