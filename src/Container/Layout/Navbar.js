import classes from './Navbar.module.css'
import { useState } from 'react'

const Navbar = () => {
    const [tab, setTab] = useState('burger-builder')

    const onChangeTab = nav => setTab(nav)

    return (
        <nav>
            <div className="nav-wrapper container">
                <a className="brand-logo">BURGER LOGO</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li onClick={() => onChangeTab('burger-builder')} className={tab==='burger-builder'?classes.Active:null}><a>Burger Builder</a></li>
                    <li onClick={() => onChangeTab('order')} className={tab==='order'?classes.Active:null}><a>Order</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

