import {
  GET_WEATHER,
  CLEAR_WEATHER
} from '../actionTypes'

const initialState = {
  weather: null
}

const Weather = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: { ...payload }
      }
    case CLEAR_WEATHER:
      return {
        ...state,
        weather: null
      }
    default:
      return {
        ...state
      }
  }
}

export default Weather