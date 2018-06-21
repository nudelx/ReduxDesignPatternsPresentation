import { API_REQUEST, apiError, apiSuccsess } from '../../actions/apiAction';

export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action)

  if (action.type.includes(API_REQUEST)) {
    const { feature, method, url } = action.meta
    fetch(url,{ method })
      .then(response => response.json())
      .then(result => dispatch(apiSuccsess({result, feature})))
      .catch(error => dispatch(apiError({error, feature})))
  }

}
