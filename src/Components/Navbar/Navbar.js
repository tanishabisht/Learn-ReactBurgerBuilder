import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <NavLink to='/'>BURGER LOGO</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to='/' exact activeClassName={classes.Active} >Burger Builder</NavLink></li>
                    <li><NavLink to='/order' exact activeClassName={classes.Active} >Order</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

