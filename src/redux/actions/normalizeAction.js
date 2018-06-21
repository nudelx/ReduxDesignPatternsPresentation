export const DATA_NORMALIZED = 'DATA_NORMALIZED'
export const DATA_NORMALIZED_FAIL = 'DATA_NORMALIZED_FAIL'

export const dataNormalized = ({ feature }) => ({
  type: `${feature} ${DATA_NORMALIZED}`,
  meta: { feature }
})

export const dataNormalizedFail = ({ feature }) => ({
  type: `${feature} ${DATA_NORMALIZED_FAIL}`,
  meta: { feature }
})
