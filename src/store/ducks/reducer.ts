import { combineReducers } from 'redux';
import * as reducers from 'src/store/ducks/index';

const rootReducer = combineReducers(reducers);
export default rootReducer;
