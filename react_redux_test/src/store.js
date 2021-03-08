import {createStore, applyMiddleware, combineReducers } from 'redux';
import reducer from './pages/users/redux/reducer'
import tableReducer from './pages/tables/redux/tableReducer'
import thunk from 'redux-thunk'

const storeTree = combineReducers({
    reducer,
    tableReducer
})
const store = createStore(storeTree, applyMiddleware(thunk))

export default store