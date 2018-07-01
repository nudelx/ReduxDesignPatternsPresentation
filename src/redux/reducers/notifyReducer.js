import { SET_NOTIFICATION } from '../actions/notifyAction'
const initState = {}

export default function (state = initState , action) {
  if (action.type.includes(SET_NOTIFICATION)) {
    return { ...state, [action.type]: action.payload }
  }
  return state
}
