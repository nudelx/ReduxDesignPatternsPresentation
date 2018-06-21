import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import cases from './reducers/casesReducer'
import ui from './reducers/uiReducer'
import notify from './reducers/notifyReducer'

const rootReducer = combineReducers({ cases, ui, notify })

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  applyMiddleware(...[]),
)
const initStore = {}
export const store = createStore( rootReducer, initStore ,enhancer)
