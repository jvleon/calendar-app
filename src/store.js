import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import Reminders from './reducers/reminders'

const rootReducer = combineReducers({ reminders: Reminders })

export default createStore(rootReducer, applyMiddleware(thunk))