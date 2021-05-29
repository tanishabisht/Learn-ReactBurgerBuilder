import Navbar from './Navbar'

const Layout = props => {
    return (
        <div>
            <Navbar/>
            <div>
                <div className='row' style={{margin:0}}>
                    <div style={{minHeight:'91vh'}} className='col m7 teal lighten-2 valign-wrapper'>{props.lComponent}</div>
                    <div style={{minHeight:'91vh'}} className='col m5 teal lighten-1 valign-wrapper'>{props.rComponent}</div>                
                </div>
            </div>
        </div>
    )
}

export default Layout