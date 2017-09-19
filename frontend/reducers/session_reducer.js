import { RECEIVE_CURRENT_USER } from '../actions/auth_actions';
import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null
}

const sessionReducer = (state = _nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
