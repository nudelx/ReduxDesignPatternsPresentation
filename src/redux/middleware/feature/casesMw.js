import { API_ERROR, API_SUCCSES, apiRequest } from '../../actions/apiAction';
import { CASE, FETCH_CASES, setCases } from '../../actions/caseAction';
import { setLoader } from '../../actions/uiActions';
import { setNotify } from '../../actions/notifyAction';
import { fetchFields } from '../../actions/fieldsActions'
import { conditionalFetch } from '../../actions/conditionAction'

const url = 'case.json1'
const normalizeKey = 'Id'
const fieldsCondition = state => !Object.keys(state.fields).length

export const casesMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  next(action)

  switch (action.type) {

    case FETCH_CASES:
        next([ setLoader({ state: true, feature: CASE}), apiRequest({ method: 'GET', url,  feature: CASE})])
        next(conditionalFetch({ feature: CASE, conditions:[{ condition: fieldsCondition, action: fetchFields({}) }] } ) )
      break;

    case `${CASE} ${API_SUCCSES}`:
        next([setCases({cases: action.payload, normalizeKey  }), setLoader({ state: false, feature: CASE})])
      break;

    case `${CASE} ${API_ERROR}`:
        next([setNotify({feature: CASE, message: `Case fetch API Error: [${action.payload}]`}), setLoader({ state: false, feature: CASE})])
        setTimeout(() => dispatch(setNotify({feature: CASE, message: ''})), 5000)
      break;


    default:
    break
  }
}
