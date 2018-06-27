
//action feature name
export const FEATURE = '[Case]'

// action type
export const FETCH = `${FEATURE} FETCH`
export const SET = `${FEATURE} SET`

// action creator
export const fetchCases = ({ query }) => ({
  type: FETCH,
  payload: query
})
export const setCases = ({ cases, normalizeKey, normalizeKeyDataKey }) => ({
  type: SET,
  payload: cases,
  meta: { normalizeKey,  feature: FEATURE, normalizeKeyDataKey}
})
