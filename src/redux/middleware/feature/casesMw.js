import { API_ERROR, API_SUCCSES, apiRequest } from '../../actions/apiAction';
import { FEATURE, FETCH, setCases } from '../../actions/caseAction';
import { setLoader } from '../../actions/uiActions';
import { setNotify } from '../../actions/notifyAction';
import { fetchFields } from '../../actions/fieldsActions'
import { conditionalFetch } from '../../actions/conditionAction'

const url = 'case.jsons'
const normalizeKey = 'Id'
const fieldsCondition = state => !Object.keys(state.fields).length

export const casesMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  next(action)

  switch (action.type) {

    case FETCH:
        next([ setLoader({ state: true, feature: FEATURE}), apiRequest({ method: 'GET', url,  feature: FEATURE})])
        next(conditionalFetch({ feature: FEATURE, conditions:[{ condition: fieldsCondition, action: fetchFields({}) }] } ) )
      break;

    case `${FEATURE} ${API_SUCCSES}`:
        next([setCases({cases: action.payload, normalizeKey  }), setLoader({ state: false, feature: FEATURE})])
      break;

    case `${FEATURE} ${API_ERROR}`:
        next([setNotify({feature: FEATURE, message: `Case fetch API Error: [${action.payload}]`}), setLoader({ state: false, feature: FEATURE})])
        setTimeout(() => dispatch(setNotify({feature: FEATURE, message: ''})), 5000)
      break;


    default:
    break
  }
}
