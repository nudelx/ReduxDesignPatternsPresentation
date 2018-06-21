import { API_ERROR, API_SUCCSES, apiRequest } from '../../actions/apiAction';
import { CASE, FETCH_CASES, setCases } from '../../actions/caseAction';
import { setLoader } from '../../actions/uiActions';
import { setNotify } from '../../actions/notifyAction';

const url = 'case.json'
const normalizeKey = 'Id'

export const casesMiddleware = () => (next) => (action) => {
  next(action)

  switch (action.type) {

    case FETCH_CASES:
        next([ setLoader({ state: true, feature: CASE}), apiRequest({ method: 'GET', url,  feature: CASE})])
      break;

    case `${CASE} ${API_SUCCSES}`:
        next([setCases({cases: action.payload, normalizeKey}), setLoader({ state: false, feature: CASE})])
      break;

    case `${CASE} ${API_ERROR}`:
        next([setNotify({feature: CASE, message: `Case fetch API Error: [${action.payload}]`}), setLoader({ state: false, feature: CASE})])
      break;


    default:
    break
  }
}
