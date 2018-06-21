import { SET_LOADER } from '../actions/uiActions'
const initState = {}

export default function (state = initState , action) {
  if (action.type.includes(SET_LOADER)) {

    return {...state, [action.type]: action.payload}
  }
  return state
}
