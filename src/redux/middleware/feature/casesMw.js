import { CASE, FETCH_CASES } from '../../actions/caseAction';
import { apiRequest } from '../../actions/apiAction';

const url = 'cases.json'

export const casesMiddleware = () => (next) => (action) => {
  next(action)

  switch (action.type) {
    case FETCH_CASES:
        next(apiRequest({ method: 'GET', url,  feature:CASE}))
      break;

  }
}
