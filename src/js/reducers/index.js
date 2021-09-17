// Dependencies
import {combineReducers} from 'redux';

// Reducers
import teamReducer from './team';
import filterReducer from './filter';


const rootReducer = combineReducers({
    teamReducer,
    filterReducer
});
export default rootReducer;