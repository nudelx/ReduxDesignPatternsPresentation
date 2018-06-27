import { API_ERROR, API_SUCCSES, apiRequest } from '../../actions/apiAction';
import { FEATURE, FETCH, setFields } from '../../actions/fieldsActions';
import { setLoader } from '../../actions/uiActions';
import { setNotify } from '../../actions/notifyAction';

const url = 'fields.json'
const normalizeKey = 'Id'

export const fieldsMiddleware = ({dispatch}) => (next) => (action) => {
  next(action)

  switch (action.type) {

    case FETCH:
        next([ setLoader({ state: true, feature: FEATURE}), apiRequest({ method: 'GET', url,  feature: FEATURE})])
      break;

    case `${FEATURE} ${API_SUCCSES}`:

        next([setFields({fields: action.payload, normalizeKey }), setLoader({ state: false, feature: FEATURE})])
      break;

    case `${FEATURE} ${API_ERROR}`:
        next([setNotify({feature: FEATURE, message: `Case fetch API Error: [${action.payload}]`}), setLoader({ state: false, feature: FEATURE})])
        // setTimeout(() => dispatch(setNotify({feature: FEATURE, message: ''})), 5000)
      break;


    default:
    break
  }
}
