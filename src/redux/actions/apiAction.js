// action types
export const API_REQUEST = 'API_REQUEST'
export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'

// action creators
export const apiRequest = ({ body, method, url, feature }) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: { method, url, feature }
})

export const apiSuccsess = ({ result, feature }) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: result,
  meta: { feature }
})

export const apiError = ({ error, feature }) => ({
  type: `${feature} ${API_ERROR}`,
  payload: `api: ${error}`,
  meta: { feature }
})
