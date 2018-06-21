import { createStore, combineReducers, compose, applyMiddleware} from 'redux'
import { casesMiddleware } from './middleware/feature/casesMw'
import { apiMiddleware } from './middleware/core/apiMiddleware'
import cases from './reducers/casesReducer'
import notify from './reducers/notifyReducer'
import ui from './reducers/uiReducer'

const rootReducer = combineReducers({ cases, ui, notify })

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const featureMiddlewares = [casesMiddleware]
const coreMiddlewares = [ apiMiddleware ]

const enhancer = composeEnhancers(
  applyMiddleware(...featureMiddlewares, ...coreMiddlewares),
)
const initStore = {}
export const store = createStore( rootReducer, initStore ,enhancer)
