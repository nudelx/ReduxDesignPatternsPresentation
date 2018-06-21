import { CASE, SET_CASES, setCases } from '../../actions/caseAction';
import {
  dataNormalized,
  dataNormalizedFail,
} from '../../actions/normalizeAction';

export const dataNormalizeMiuddleware = ({ dispatch }) => (next) => (action) => {

  if (action.type.includes('SET') && action.meta && action.meta.normalizeKey) {

    if (Array.isArray(action.payload)) {
      dispatch(dataNormalized({feature: action.meta.feature}))
      const data = action.payload.reduce((all, item) => {
        all[item[action.meta.normalizeKey]] = item
        return item
      }, {})
      next(setCases({
        type: SET_CASES,
        payload: data,
        meta: { normalizeKey: null,  feature: CASE}}))

    } else {
      dispatch(dataNormalizedFail({feature: action.meta.feature}))
      next(action)
    }

  } else {
    next(action)
  }
}
