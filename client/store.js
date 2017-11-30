import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers/'

export const history = createHistory()

const rootReducer = combineReducers({
  reducers,
  routing : routerReducer
})

const rootMiddleware = applyMiddleware(routerMiddleware(history), thunk)

// add combined reducers and combined middlewares to the createStore method
export default createStore(rootReducer, rootMiddleware)
