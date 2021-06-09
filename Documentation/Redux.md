# Redux
- redux-devtools-extension
  - composeWithDevTools(): to tell the redux dev tools that this file contains redux
- redux
  - combineReducers()
  - createStore()
  - applyMiddleware()
- react-redux
  - <Provider>: to provide a store variable to all the components inside of it
  - useSelector(): to extract varables in the store
  - useDispatch(): to dispatch an action (to update the values of the variables in the store)


## Redux Dev Tools
1. Install redux devtools extention from the [chrome webstore](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
2. Give access to use the extension to your code. Refer [this](https://github.com/zalmoxisus/redux-devtools-extension)

WITHOUT MIDDLEWARES
```javascript
import { createStore } from 'redux'
const store = createStore( reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
```

WITH MIDDLEWARES
```javascript
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))
```


## Create boiler plate
- Store
  - action
    - actionTypes
    - ...actionCreators
    - index
  - reducers
    - ...reducers
    - index
  - [store](../src/Store/store.js)
  - [utility](../src/Store/utility.js)


### `actionTypes`
```javascript
const ActionTypes = {
  DO_THIS: 'DO_THIS'
}
export default ActionTypes
```

### `actionCreators`
```javascript
import { ActionTypes } from './'

const syncActionCreator = data => {
    return {
        type: ActionTypes.DO_THIS,
        payload: data
    }
}

export const asyncActionCreator = () => {
    return dispatch => {
        // perform async task
        dispatch(syncActionCreator(data))
    }
}
```


### `reducers`
```javascript
import { ActionTypes } from '../action'

const initState = {
    item: []
}

const someReducer = (state=initState, {type, payload}) => {
    switch(type){
        case ActionTypes.DO_THIS:
            return {
                ...state,
                item: payload
            }
        default:
            return state
    }
}

export default builderReducer
```


## Using the redux states in application
- const item = useSelector(state => state.item)
- const dispatch = useDispatch()
  - dispatch({type:'', payload:''})
  - dispatch(actionCreator(payloadData))