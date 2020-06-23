import { NEW_REMINDER, DELETE_REMINDER } from '../actionTypes'

const initialState = {
  remindersList: []
}

const Reminders = (state = initialState, { payload, type }) => {
  switch (type) {
    case NEW_REMINDER:
    case DELETE_REMINDER:
      return {
        ...state,
        remindersList: [...payload]
      }
    default:
      return {
        ...state
      }
  }
}

export default Reminders