import { useEffect, useRef, useState } from 'react'
import { Spinner } from '../index'
import classes from './OrderModal.module.css'
import M from "materialize-css"
import { Aux } from '../../Container'
import axios from '../../Config/axios-order'

const OrderModal = props => {

    var ModalRef = useRef(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        M.AutoInit()
    }, [])
    
    const openModalHandler = () =>  M.Modal.init(ModalRef, { opacity: 0.8 })

    const purchaseContHandler = () => {
      setIsLoading(true)
      const data = {
        ingredients: props.ingredients,
        price: props.totalPrice,
        customer: {
          name: 'Tanisha Bisht',
          address: {
            street: 'Test Street 1',
            zipCode: '41351',
            country: 'Germany'
          },
          email: 'test@test.com'
        },
        deliveryMethod: 'fastest'
      }
      axios.post('/order.json', data)
        .then(res => {
          console.log(res)
          setIsLoading(false)
        })
        .catch(err => {
          console.log(err)
          setIsLoading(false)
        })
    }

    let orderSummary = <Aux>
      <div className="modal-content">
        <h4>Do you want to Checkout?</h4>
        <p><strong>Total Price: {props.totalPrice}</strong></p>
        <p class={classes.Items}>A delicious burger with the following ingredients:</p>
        {Object.keys(props.ingredients).map(igName => <p class={classes.Items} key={igName}>{igName} : {props.ingredients[igName]}</p>)}
      </div>
      <div className="modal-footer">
        <button onClick={() => console.log('disagreed')} className="modal-close waves-effect waves-red btn-flat">NO</button>
        <button onClick={purchaseContHandler} className="modal-close waves-effect waves-green btn-flat">YES</button>
      </div>
    </Aux>

    if(isLoading) orderSummary = <Spinner />

    return (
      <Aux>
        <button onClick={openModalHandler} style={{width:'100%', marginTop:'1.5rem'}} className={`${props.orderIsDisabled?'disabled':null} btn waves-effect waves-light teal darken-3 modal-trigger`} data-target="orderModal">Order Now</button>
        <div ref={ModalRef} id="orderModal" className="modal" >
          {orderSummary}
        </div>
        
      </Aux>
    )
}

export default OrderModal