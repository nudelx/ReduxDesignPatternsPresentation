
//action feature name
export const FEATURE_NAME = '[Case]'

// action type
export const FETCH = `${FEATURE_NAME} FETCH`
export const SET = `${FEATURE_NAME} SET`

// action creator
export const fetchCases = ({ query }) => ({
  type: FETCH,
  payload: query
})
export const setCases = ({ cases, normalizeKey, normalizeKeyDataKey }) => ({
  type: SET,
  payload: cases,
  meta: { normalizeKey,  feature: FEATURE_NAME, normalizeKeyDataKey}
})
