// Dependencies
import {combineReducers} from 'redux';

// Reducers
import listReducer from './list';
import textReducer from './text';
import warningReducer from './warning';
import typeReducer from './type';
import teamReducer from './team';
import filterReducer from './filter';


const rootReducer = combineReducers({
    listReducer,
    textReducer,
    warningReducer,
    typeReducer,
    teamReducer,
    filterReducer
});
export default rootReducer;