import { combineReducers } from 'redux';

import todoReducer from "./todoReducer";
/* Unnessesary and unused in this project, but to demonstrate that 
I know about the practice of seperating reducers of different types */

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer;