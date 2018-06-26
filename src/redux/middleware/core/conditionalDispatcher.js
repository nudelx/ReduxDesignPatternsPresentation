import {CONDITIONAL_FETCH} from '../../actions/conditionAction'
export const conditionalDispetcher = ({ dispatch, getState }) => (next) => (action) => {
  next(action)

  if (action.type.includes(CONDITIONAL_FETCH)) {
      if (Array.isArray(action.payload)) {
        action.payload.forEach(d => d.condition(getState()) ? dispatch(d.action): null)
      } else {
        action.payload.condition(getState()) && dispatch(action.action)
      }
  }

}
