import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';

const allRedusers = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
})
export default allRedusers;