import { useEffect, useState } from 'react'
import { Order } from '../Components'
import axios from '../Config/axios-order'

const Orders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('order.json')
        .then(res => {
            var dataVar = []
            for (let key in res.data) dataVar.push({...res.data[key], id:key})
            setOrders(dataVar)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {orders.map((ord,id) => <Order key={id} ord={ord} />)}
        </div>
    )
}

export default Orders