import { NEW_REMINDER, DELETE_REMINDER } from '../actionTypes'

export const addReminder = (reminders, callback) => {
  const orderedReminders = reminders.length > 0 ? reminders.sort((a, b) => a.date.unix() - b.date.unix()) : reminders
  callback()
  return {
    type: NEW_REMINDER,
    payload: orderedReminders
  }
}

export const deleteReminder = (reminderToDelete, reminders, callback) => {
  const newReminderList = reminders.filter(({ date, description }) => date !== reminderToDelete.date && description !== reminderToDelete.description)
  callback()
  return {
    type: DELETE_REMINDER,
    payload: newReminderList
  }
}