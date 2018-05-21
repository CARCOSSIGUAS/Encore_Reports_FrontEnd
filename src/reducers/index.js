import { combineReducers } from 'redux';
import authentication from './authenticationReducer';
import { accountHomeHasErrored, accountHomeIsLoading, accountHomeFetchDataSuccess } from './accounHomeReducers';

const rootReducer = combineReducers({
  authentication,
  accountHomeHasErrored,
  accountHomeIsLoading,
  accountHomeFetchDataSuccess
});

export default rootReducer;
