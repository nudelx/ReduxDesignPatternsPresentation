import { API_SUCCSES, apiRequest } from '../../actions/apiAction';
import { CASE, FETCH_CASES, setCases } from '../../actions/caseAction';
import { setLoader } from '../../actions/uiActions';

const url = 'case.json'

export const casesMiddleware = () => (next) => (action) => {
  next(action)

  switch (action.type) {

    case FETCH_CASES:
        next(setLoader({ state: true, feature: CASE}))
        next(apiRequest({ method: 'GET', url,  feature: CASE}))
      break;

    case `${CASE} ${API_SUCCSES}`:
        next(setCases({cases: action.payload}))
        next(setLoader({ state: false, feature: CASE}))
      break;


    default:
    break
  }
}
