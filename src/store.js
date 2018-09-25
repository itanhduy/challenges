import { createStore, combineReducers } from 'redux'
import { CharityReducer, DonationReducer } from './redux/reducers'

const RootReducer = combineReducers({
  charity: CharityReducer,
  donation: DonationReducer,
})

const Store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default Store

export { RootReducer }
