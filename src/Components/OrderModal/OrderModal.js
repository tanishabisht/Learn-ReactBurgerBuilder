import { useEffect, useRef } from 'react'
import classes from './OrderModal.module.css'
import M from "materialize-css"
import Aux from '../../Hoc/Aux'

const OrderModal = props => {

    var ModalRef = useRef(null)

    useEffect(() => {
        M.AutoInit()
    }, [])
    
    const openModalHandler = () => {
      const options = {
        onOpenStart: () => console.log("Open Start"),
        onOpenEnd: () => console.log("Open End"),
        onCloseStart: () => console.log("Close Start"),
        onCloseEnd: () => console.log("Close End"),
        opacity: 0.8
      }
      M.Modal.init(ModalRef, options)
    }

    return (
      <Aux>
        <button onClick={openModalHandler} style={{width:'100%', marginTop:'1.5rem'}} className={`${props.orderIsDisabled?'disabled':null} btn waves-effect waves-light teal darken-3 modal-trigger`} data-target="orderModal">Order Now</button>
        <div ref={ModalRef} id="orderModal" className="modal" >
          <div className="modal-content">
            <h4>Do you want to Checkout?</h4>
            <p><strong>Total Price: {props.totalPrice}</strong></p>
            <p class={classes.Items}>A delicious burger with the following ingredients:</p>
            {Object.keys(props.ingredients).map(igName => <p class={classes.Items} key={igName}>{igName} : {props.ingredients[igName]}</p>)}
          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">NO</a>
            <a className="modal-close waves-effect waves-green btn-flat">YES</a>
          </div>
        </div>
      </Aux>
    )
}

export default OrderModal