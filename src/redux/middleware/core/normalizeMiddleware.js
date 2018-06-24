import { setCases } from '../../actions/caseAction'
import {
  dataNormalized,
  dataNormalizedFail
} from '../../actions/normalizeAction'

export const normalizeMiuddleware = ({ dispatch }) => next => action => {
  if (action.type.includes('SET') && action.meta.normalizeKey) {
      console.log(action)
    if (Array.isArray(action.payload)) {
      dispatch(dataNormalized({ feature: action.meta.feature }))
      const data = action.payload.reduce((all, item) => {
        all[item[action.meta.normalizeKey]] = item
        return all
      }, {})
      next(
        setCases({
          normalizeKey: null,
          [action.meta.normalizeKeyDataKey]: data
        })
      )
    } else {
      dispatch(dataNormalizedFail({ feature: action.meta.feature }))
      next(action)
    }
  } else {
    next(action)
  }
}
