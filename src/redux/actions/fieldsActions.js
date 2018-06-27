
//action feature name
export const FIELD = '[FIELD]'

// action type
export const FETCH = `${FIELD} FETCH`
export const SET = `${FIELD} SET`

// action creator
export const fetchFields = ({ query }) => ({
  type: FETCH,
  payload: query
})
export const setFields = ({ fields, normalizeKey, normalizeKeyDataKey }) => ({
  type: SET,
  payload: fields,
  meta: { normalizeKey,  feature: FIELD, normalizeKeyDataKey}
})
