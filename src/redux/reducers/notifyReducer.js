import { SET_NOTIFICATION } from '../actions/notifyAction'
const initState = {}

const stateProcessor = {
  [SET_NOTIFICATION]: (state, action) => ({ ...state, [action.type]: action.payload })
}


export default function (state = initState , action) {
  return stateProcessor[action.type]
  ? stateProcessor[action.type](state ,action.payload)
  : state
}
