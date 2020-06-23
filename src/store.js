import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import Reminders from './reducers/reminders'
import Weather from './reducers/weather'

const rootReducer = combineReducers({ reminders: Reminders, weather: Weather })

export default createStore(rootReducer, applyMiddleware(thunk))