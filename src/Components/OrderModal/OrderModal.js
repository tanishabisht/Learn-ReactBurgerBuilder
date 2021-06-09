import React, { useEffect, useRef, useState } from 'react'
import { Spinner } from '../../UI'
import classes from './OrderModal.module.css'
import M from "materialize-css"
// import axios from '../../Config/axios-order'
import { useSelector, useDispatch } from 'react-redux'
import { addOrder } from '../../Store/action'

const OrderModal = props => {

  const ingredients = useSelector(state => state.ing.ingredients)
  const dispatch = useDispatch()

  var ModalRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
      M.AutoInit()
  }, [])
  
  const openModalHandler = () =>  M.Modal.init(ModalRef, { opacity: 0.8 })

  const purchaseContHandler = () => {
    setIsLoading(true)
    const data = {
      ingredients: ingredients,
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
    dispatch(addOrder(data))
  }

  let orderSummary = <React.Fragment>
    <div className="modal-content">
      <h4>Do you want to Checkout?</h4>
      <p><strong>Total Price: {props.totalPrice}</strong></p>
      <p className={classes.Items}>A delicious burger with the following ingredients:</p>
      {Object.keys(ingredients).map(igName => <p className={classes.Items} key={igName}>{igName} : {ingredients[igName]}</p>)}
    </div>
    <div className="modal-footer">
      <button onClick={() => console.log('disagreed')} className="modal-close waves-effect waves-red btn-flat">NO</button>
      <button onClick={purchaseContHandler} className="modal-close waves-effect waves-green btn-flat">YES</button>
    </div>
  </React.Fragment>

  if(isLoading) orderSummary = <Spinner />

  return (
    <React.Fragment>
      <button onClick={openModalHandler} style={{width:'100%', marginTop:'1.5rem'}} className={`${props.orderIsDisabled?'disabled':null} btn waves-effect waves-light teal darken-3 modal-trigger`} data-target="orderModal">Order Now</button>
      <div ref={ModalRef} id="orderModal" className="modal" >
        {orderSummary}
      </div>
    </React.Fragment>
  )
}

export default OrderModal