import classes from './Control.module.css'

const Control = props => {
    return (
        <div className={classes.BuildControl}>
            <h6 className={classes.Label}>{props.label}</h6> 
            <button onClick={props.onLess} className={`${props.isDisabled?'disabled':null} btn waves-effect waves-light red lighten-3`}>Less</button>
            <button onClick={props.onMore} className={`btn waves-effect waves-light red lighten-2`}>More</button>
        </div>
    )
}

export default Control