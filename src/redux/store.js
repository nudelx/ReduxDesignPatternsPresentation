import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import cases from './reducers/cases';
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const rootReducer = combineReducers({ cases })

const enhancer = composeEnhancers(
  applyMiddleware(...[]),
)
const initStore = {}
export const store = createStore( rootReducer, initStore ,enhancer)
