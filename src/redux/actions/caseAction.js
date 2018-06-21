
//action feature name
export const CASE = '[Case]'
const normalizeKey = 'Id'

// action type
export const FETCH_CASES = `${CASE} FETCH`
export const SET_CASES = `${CASE} SET`

// action creator
export const fetchCases = ({ query }) => ({
  type: FETCH_CASES,
  payload: query
})
export const setCases = ({ cases }) => ({
  type: SET_CASES,
  payload: cases,
  meta: { normalizeKey,  feature: CASE}
})
