
//action feature name
export const FEATURE_NAME = '[Case]'

// action type
export const FETCH_CASES = `${FEATURE_NAME} FETCH`
export const SET_CASES = `${FEATURE_NAME} SET`

// action creator
export const fetchCases = ({ query }) => ({
  type: FETCH_CASES,
  payload: query
})
export const setCases = ({ cases, normalizeKey, normalizeKeyDataKey }) => ({
  type: SET_CASES,
  payload: cases,
  meta: { normalizeKey,  feature: FEATURE_NAME, normalizeKeyDataKey}
})
