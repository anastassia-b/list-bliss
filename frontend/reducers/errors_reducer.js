import errorReducer from './error_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session: sessionErrorsReducer,
  errors: errorReducer
});
