// Dependencies
import {combineReducers} from 'redux';

// Reducers
import listReducer from './list';
import teamReducer from './team';
import filterReducer from './filter';


const rootReducer = combineReducers({
    listReducer,
    teamReducer,
    filterReducer
});
export default rootReducer;