import {combineReducers} from 'redux';
import toDoReducer from './todo-reducer';


export default combineReducers({
  todos: toDoReducer,
});



