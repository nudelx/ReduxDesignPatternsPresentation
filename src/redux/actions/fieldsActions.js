
//action feature name
export const FEATURE_NAME = '[FIELD]'

// action type
export const FETCH = `${FEATURE_NAME} FETCH`
export const SET = `${FEATURE_NAME} SET`

// action creator
export const fetchFields = ({ query }) => ({
  type: FETCH,
  payload: query
})
export const setFields = ({ fields, normalizeKey, normalizeKeyDataKey }) => ({
  type: SET,
  payload: fields,
  meta: { normalizeKey,  feature: FEATURE_NAME, normalizeKeyDataKey}
})
