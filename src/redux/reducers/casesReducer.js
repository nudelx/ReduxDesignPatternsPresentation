import { SET_CASES } from '../actions/caseAction'
const initState = {}

const stateProcessor = {
  [SET_CASES]: (state, action) => {
     return { ...state, ...action.payload }
  }
}


export default function (state = initState , action) {
  return stateProcessor[action.type]
  ? stateProcessor[action.type](state ,action)
  : state
}
