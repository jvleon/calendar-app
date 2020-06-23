import { NEW_REMINDER, DELETE_REMINDER, GET_WEATHER, CLEAR_WEATHER } from '../actionTypes'

const apiKey = '9e00ff582fa5da259b4ac3f46b06770c'

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

export const getWeatherByCityId = (cityId, time) => dispatch => {
  const apiURL = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&start=${time}&end=${time}&appid=${apiKey}`
  fetch(apiURL, { method: 'GET' })
  .then(response => response.json())
  .then(response => {
    dispatch(getWeather(response))
  })
}

const getWeather = (payload) => ({
  type: GET_WEATHER,
  payload
})

export const resetWeather = () => ({
  type: CLEAR_WEATHER
})