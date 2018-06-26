
//action feature name
export const FIELD = '[FIELD]'

// action type
export const FETCH_FIELDS = `${FIELD} FETCH`
export const SET_FIELDS = `${FIELD} SET`

// action creator
export const fetchFields = ({ query }) => ({
  type: FETCH_FIELDS,
  payload: query
})
export const setFields = ({ fields, normalizeKey, normalizeKeyDataKey }) => ({
  type: SET_FIELDS,
  payload: fields,
  meta: { normalizeKey,  feature: FIELD, normalizeKeyDataKey}
})
