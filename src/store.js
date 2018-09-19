import { createStore, combineReducers } from 'redux'
import { CharityReducer } from './redux/reducers'

const RootReducer = combineReducers({
  charity: CharityReducer,
})

const Store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default Store

export { RootReducer }
