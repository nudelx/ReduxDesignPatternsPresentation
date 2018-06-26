import { createStore, combineReducers, compose, applyMiddleware} from 'redux'

import { apiMiddleware } from './middleware/core/apiMiddleware'
import { casesMiddleware } from './middleware/feature/casesMw'
import { fieldsMiddleware } from './middleware/feature/fieldsMw'
import { normalizeMiuddleware } from './middleware/core/normalizeMiddleware';
import { splitterMiddleware } from './middleware/core/spliterMiddleware';
import { conditionalDispetcher } from './middleware/core/conditionalDispatcher'
import cases from './reducers/casesReducer'
import notify from './reducers/notifyReducer'
import ui from './reducers/uiReducer'
import fields from './reducers/fealdsReducer'

const rootReducer = combineReducers({ cases, ui, notify, fields })

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const featureMiddlewares = [casesMiddleware, fieldsMiddleware]
const coreMiddlewares = [ splitterMiddleware, conditionalDispetcher, apiMiddleware, normalizeMiuddleware ]

const enhancer = composeEnhancers(
  applyMiddleware(...featureMiddlewares, ...coreMiddlewares),
)
const initStore = {}
export const store = createStore( rootReducer, initStore ,enhancer)
