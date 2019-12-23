import {createStore, applyMiddleware, combineReducers} from "redux";
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import user from './reducers/userReducer';
import tableData from './reducers/tableDataReducer';

export default createStore(
    combineReducers({
        user,
        tableData
    }), {},
    applyMiddleware(createLogger(), thunk)
    + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
