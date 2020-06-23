import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import DatePicker from 'react-datepicker'
import { GithubPicker  } from 'react-color';
import Select from 'react-select'
import moment from 'moment'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import { addReminder, getWeatherByCityId, resetWeather } from '../../actions'
import 'react-datepicker/dist/react-datepicker.css'
import options from '../../cities'

const ReminderCreate = ({ display, toggle, isNew, data, ...props }) => {
  const [date, setDate] = useState(new Date())
  const [editEnable, setEditEnable] = useState(false)
  const [selectedCity, setSelectedCity] = useState()
  const [currentWeather, setCurrentWeather] = useState()
  const [state, setState] = useState({
    description: '',
    city: '',
    color: ''
  })

  useEffect(() => {    
    if(!isNew && data && data.hasOwnProperty('date')) {
      setState(data)
      setDate(data.date.toDate()) 
      getSelectedCity() 
    }
  }, [data])

  const getSelectedCity = async () => {
    const currentCity = await options.filter(({ label }) => {
      return label === data.city
    })
    setSelectedCity(currentCity[0]);
    console.log(selectedCity, currentCity);
  }

  useEffect(() => {    
    if(selectedCity && selectedCity.value & !isNew) props.getWeatherByCityId(selectedCity.value)
  }, [selectedCity])

  useEffect(() => {
    if(props.weather && !isNew && selectedCity) {
      let cel = getCelcius(props.weather)
      setCurrentWeather(cel)
    }
  }, [props.weather])

  useEffect(() => {
    // reset modal fields on hide
    if(!display) {
      setDate(new Date())
      setState({
        description: '',
        city: '',
        color: ''
      })
      setEditEnable(false)
      setSelectedCity(null)
      props.resetWeather()
    }
  }, [display])

  const { addToast } = useToasts()

  // function for handle data from inputs
  const handleOnChange = (e) => {
    let { name, value } = e.target
    let newState = state
    newState[name] = value
    setState({ ...newState })
  }

  // handle change on color picker
  const handleChangeColor = ({ hex }) => {
    let newState = state
    newState['color'] = hex    
    setState({ ...newState })    
  }
  // is called when the action is finished 
  const onSucces = () => {
    const message = isNew ? 'Reminder added' : 'Reminder updated'
    addToast(message, {
      appearance: 'success',
      autoDismiss: true,
    })
    toggle()
  }
  
  const submit = () => {
    if(state.description.length > 0 && state.city.length > 0, state.color.length > 0) {
      const newList = props.reminders
      const formatedDate = moment(date)
      const nameDay = formatedDate.format('dddd')
      const newReminder = {
        ...state,
        date:formatedDate,
        nameDay
      }
      if(isNew) {
        newList.push(newReminder)
        props.addReminder(newList, onSucces)
      } else {
        const index = props.reminders.findIndex(({ date }) => date === data.date)
        newList[index] = newReminder
        props.addReminder(newList, onSucces)
      }
    } else {      
      addToast('All fields required', {
        appearance: 'warning',
        autoDismiss: true,
      })    
    }
  }  

  const handleChangeSelect = selection => {
    setSelectedCity(selection)
    setState({ ...state, city: selection.label })
    console.log(selection);
    
  }

  const getCelcius = ({ weather }) => {
    const cel = weather.main.temp - 273.1
    return cel.toFixed(2)
  }

  return (
    <Modal isOpen={display} toggle={toggle}>
      <ModalHeader>
      {
        isNew ?
        <div>New Reminder</div>
        :
        props.weather && selectedCity && selectedCity['label'] &&
        <div>
          {`Temperature in ${selectedCity['label']} - ${currentWeather}°`}
        </div>
      }
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Description</Label>
            <Input
              value={state['description']}
              type="text" 
              name="description" 
              maxlength="30"
              disabled={isNew ? false : !editEnable}
              onChange={handleOnChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>City</Label>
            <Select 
              options={options}
              isDisabled={isNew ? false : !editEnable}
              value={selectedCity}
              onChange={handleChangeSelect}
            />
          </FormGroup>
          <FormGroup>
            <Label>Time</Label>
            <DatePicker
              selected={date}
              onChange={date => setDate(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              disabled={isNew ? false : !editEnable}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Date</Label>
            <DatePicker
              showPopperArrow={false}
              selected={date}
              onChange={date => setDate(date)}
              disabled={isNew ? false : !editEnable}
              required
            />          
          </FormGroup>
          <FormGroup>
            <Label>Color</Label>
            <div style={{ color: state.color, fontWeight: 700 }}>{state.color.length > 0 ? state.color : 'chose a color'}</div>
            <GithubPicker
              onChangeComplete={handleChangeColor}
              color={state.color}
              disabled={isNew ? false : !editEnable}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        {
          // display buttons depends if is a new reminder or is editing an existing one
          isNew || editEnable ? 
          <Button onClick={submit} color="success">Save</Button>
          :
          <>
            <Button 
              color="primary" 
              onClick={() => setEditEnable(!editEnable)}
            >
              {editEnable ? 'Cancel' : 'Edit'}
            </Button>
          </>
        }
        <Button color="danger" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  )
}

const mapStateToProps = ({ reminders, weather }) => ({
  reminders: reminders.remindersList,
  weather
})

const mapDispatchToProps = {
  addReminder,
  getWeatherByCityId,
  resetWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderCreate)