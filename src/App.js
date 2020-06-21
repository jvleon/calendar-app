import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Home from './containers/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    display: block;
    width: 100%;
    border-radius: 4px;
    border: none
    outline: none;
    padding: 3px;
  }
  .react-datepicker__input-container input {
    border: 1px solid #ced4da;
  }
  .react-datepicker__input-container input:disabled {
    background-color: #e9ecef;
    opacity: 1;
  }
`

function App() {
  return (
    <Provider store={store}>
      <Home />
      <GlobalStyle whiteColor />
    </Provider>
  )
}

export default App
