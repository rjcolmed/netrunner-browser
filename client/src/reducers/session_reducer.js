import * as types from '../actions/action_types';

export default function sessionReducer(state = !!sessionStorage.jwt, action) {
  switch ( action.type ) {
    case types.LOG_IN_SUCCESS:
      return !!sessionStorage.jwt
    case types.LOG_OUT:
      return !!sessionStorage.jwt
    case types.CREATE_USER_SUCCESS:
      return !!sessionStorage.jwt
    default:
      return state;
  }
}

