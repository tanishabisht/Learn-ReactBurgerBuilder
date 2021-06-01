# HOCs: Higher Order Component

## Empty Wrapper
```javascript
const Aux = props => props.children
export default Aux
```

## With Attributes
```javascript
const WithClass = props => (
    <div classname={props.classes}>
        {props.children}
    </div>
)
export default WithClass
```

## With JS 
```javascript
const withClass = (WrappedComponent, className) => {
    return props => <div className={className}>
        <WrappedComponent {...props} />
    </div>
}
export default withClass
```
