import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';

import user from './reducers/userReducer';
import tableData from './reducers/tableDataReducer';

export default createStore(
    combineReducers({
        user,
        tableData
    }), {},
    applyMiddleware(thunk)
)
