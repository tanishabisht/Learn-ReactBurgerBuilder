import { Layout } from '../Container'
import { Burger } from '../Components'

const lComponent=<h1>HI PEOPLE! I AM THE LEFT COMPONENT</h1>
const rComponent=<h1>HI PEOPLEeeee! I AM THE RIGHT COMPONENT</h1>

const BurgerBuilder = props => {
    return (        
      <Layout lComponent={<Burger/>} rComponent={rComponent} />
    )
}

export default BurgerBuilder