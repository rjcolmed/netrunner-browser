import * as types from '../actions/action_types';

export default function sessionReducer(state = !!sessionStorage.jwt, action) {
  switch ( action.type ) {
    case types.LOG_IN_SUCCESS:
    //need to redirect to allowed page after authentication. how?
      return !!sessionStorage.jwt
    case types.LOG_OUT:
      return !!sessionStorage.jwt
    default:
      return state;
  }
}

