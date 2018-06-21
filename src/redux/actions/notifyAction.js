
// action type
export const SET_NOTIFICATION = 'SET_NOTIFICATION'

//action creator
export const setNotify = ({ feature, message }) => ({
  type: `${feature} ${SET_NOTIFICATION}`,
  payload: message,
  meta: { feature }
})
