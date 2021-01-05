import counterReducer from './counter';
import loggedReducer from './isloggedin';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    counter : counterReducer,
    loggedin : loggedReducer
});

export default allReducer;