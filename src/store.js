import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reminders from './reducers/reminders'

export default createStore(Reminders, applyMiddleware(thunk))