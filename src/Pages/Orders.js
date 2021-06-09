import React, { useEffect } from 'react'
import { Order } from '../Components'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../Store/action'

const Orders = () => {

    const orders = useSelector(state => state.ord.orders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])

    return (
        <React.Fragment>
            {orders.map((ord,id) => <Order key={id} ord={ord} />)}
        </React.Fragment>
    )
}

export default Orders