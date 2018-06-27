
//action feature name
export const CASE = '[Case]'

// action type
export const FETCH = `${CASE} FETCH`
export const SET = `${CASE} SET`

// action creator
export const fetchCases = ({ query }) => ({
  type: FETCH,
  payload: query
})
export const setCases = ({ cases, normalizeKey, normalizeKeyDataKey }) => ({
  type: SET,
  payload: cases,
  meta: { normalizeKey,  feature: CASE, normalizeKeyDataKey}
})
