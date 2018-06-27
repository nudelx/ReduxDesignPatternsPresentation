
//action feature name
export const FEATURE = '[FIELD]'

// action type
export const FETCH = `${FEATURE} FETCH`
export const SET = `${FEATURE} SET`

// action creator
export const fetchFields = ({ query }) => ({
  type: FETCH,
  payload: query
})
export const setFields = ({ fields, normalizeKey, normalizeKeyDataKey }) => ({
  type: SET,
  payload: fields,
  meta: { normalizeKey,  feature: FEATURE, normalizeKeyDataKey}
})
