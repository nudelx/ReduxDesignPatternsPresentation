import { SET_FIELDS } from '../actions/fieldsActions'
const initState = {}

const stateProcessor = {
  [SET_FIELDS]: (state, action) => {
     return { ...state, ...action.payload }
  }
}


export default function (state = initState , action) {
  return stateProcessor[action.type]
  ? stateProcessor[action.type](state ,action)
  : state
}
