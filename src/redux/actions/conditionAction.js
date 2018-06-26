export const CONDITIONAL_FETCH = 'CONDITIONAL_FETCH'

export const conditionalFetch = ({ feature, conditions }) => ({
  type: `${feature} ${CONDITIONAL_FETCH}`,
  payload: conditions,
  meta: { feature }
})
