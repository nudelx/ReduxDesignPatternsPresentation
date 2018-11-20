import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/apiAction';
import { FEATURE_NAME, FETCH, setFields } from '../../actions/fieldsActions';
import { setLoader } from '../../actions/uiActions';
import { setNotify } from '../../actions/notifyAction';

const url = 'fields.json'
const normalizeKey = 'Id'

export const fieldsMiddleware = ({dispatch}) => (next) => (action) => {
  next(action)

  switch (action.type) {

    case FETCH:
        next([ setLoader({ state: true, feature: FEATURE_NAME}), apiRequest({ method: 'GET', url,  feature: FEATURE_NAME})])
      break;

    case `${FEATURE_NAME} ${API_SUCCESS}`:

        next([setFields({fields: action.payload, normalizeKey }), setLoader({ state: false, feature: FEATURE_NAME})])
      break;

    case `${FEATURE_NAME} ${API_ERROR}`:
        next([setNotify({feature: FEATURE_NAME, message: `${FEATURE_NAME} fetch API Error: [${action.payload}]`}), setLoader({ state: false, feature: FEATURE_NAME})])
        // setTimeout(() => dispatch(setNotify({feature: FEATURE_NAME, message: ''})), 5000)
      break;


    default:
    break
  }
}
