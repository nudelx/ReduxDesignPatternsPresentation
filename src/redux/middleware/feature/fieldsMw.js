import { API_ERROR, API_SUCCSES, apiRequest } from '../../actions/apiAction';
import { FIELD, FETCH_FIELDS, setFields } from '../../actions/fieldsActions';
import { setLoader } from '../../actions/uiActions';
import { setNotify } from '../../actions/notifyAction';

const url = 'fields.json'
const normalizeKey = 'Id'
const normalizeKeyDataKey = 'fields'

export const fieldsMiddleware = ({dispatch}) => (next) => (action) => {
  next(action)

  switch (action.type) {

    case FETCH_FIELDS:
        next([ setLoader({ state: true, feature: FIELD}), apiRequest({ method: 'GET', url,  feature: FIELD})])
      break;

    case `${FIELD} ${API_SUCCSES}`:

        next([setFields({fields: action.payload, normalizeKey, normalizeKeyDataKey }), setLoader({ state: false, feature: FIELD})])
      break;

    case `${FIELD} ${API_ERROR}`:
        next([setNotify({feature: FIELD, message: `Case fetch API Error: [${action.payload}]`}), setLoader({ state: false, feature: FIELD})])
        // setTimeout(() => dispatch(setNotify({feature: FIELD, message: ''})), 5000)
      break;


    default:
    break
  }
}
