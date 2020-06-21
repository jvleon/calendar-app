import React from 'react'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div>Hello world!</div>
    </Provider>
  )
}

export default App
