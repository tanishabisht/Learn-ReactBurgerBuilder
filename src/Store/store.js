import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { builderReducer, orderReducer } from './reducers'


const rootReducer = combineReducers({
    ing: builderReducer,
    ord: orderReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store