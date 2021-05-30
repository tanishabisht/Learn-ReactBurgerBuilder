
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <a className="brand-logo">BURGER LOGO</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a>Burger Builder</a></li>
                    <li><a>Order</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

