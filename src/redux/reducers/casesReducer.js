import { SET } from '../actions/caseAction'
const initState = {}

// *** this part is can be imported form other module
const stateProcessorCreator = FEATURE_ACTION_TYPE => ({
  [FEATURE_ACTION_TYPE]: (state, action) => {
    return { ...state, ...action.payload }
  }
})
// ***

const stateProcessor = stateProcessorCreator(SET)

// THE REDUCER -> clean -> pure -> simple
export default function(state = initState, action) {
  return stateProcessor[action.type]
    ? stateProcessor[action.type](state, action)
    : state
}
