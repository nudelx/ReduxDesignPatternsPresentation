import {
  dataNormalized,
  dataNormalizedFail
} from '../../actions/normalizeAction'

export const normalizeMiuddleware = ({ dispatch }) => next => action => {
  if (action.type.includes('SET') && action.meta.normalizeKey) {
    if (Array.isArray(action.payload)) {
      dispatch(dataNormalized({ feature: action.meta.feature }))
      const data = action.payload.reduce((all, item) => {
        all[item[action.meta.normalizeKey]] = item
        return all
      }, {})
      action.meta = {...action.meta, normalizeKey: null }
      action.payload = data
    } else {
      dispatch(dataNormalizedFail({ feature: action.meta.feature }))
    }
  }
  next(action)
}
