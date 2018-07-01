import { API_ERROR, API_SUCCSES, apiRequest } from '../../actions/apiAction';
import { FEATURE_NAME, FETCH, setCases } from '../../actions/caseAction';
import { setLoader } from '../../actions/uiActions';
import { setNotify } from '../../actions/notifyAction';

const url = 'case.json'
const normalizeKey = 'Id'

export const casesMiddleware = ({dispatch, getSate}) => (next) => (action) => {
  next(action)

  switch (action.type) {

    case FETCH:
        next([ setLoader({ state: true, feature: FEATURE_NAME}), apiRequest({ method: 'GET', url,  feature: FEATURE_NAME})])

      break;

    case `${FEATURE_NAME} ${API_SUCCSES}`:
        next([setCases({cases: action.payload, normalizeKey  }), setLoader({ state: false, feature: FEATURE_NAME})])
      break;

    case `${FEATURE_NAME} ${API_ERROR}`:
        next([setNotify({feature: FEATURE_NAME, message: `Case fetch API Error: [${action.payload}]`}), setLoader({ state: false, feature: FEATURE_NAME})])
        setTimeout(() => dispatch(setNotify({feature: FEATURE_NAME, message: ''})), 5000)
      break;


    default:
    break
  }
}
