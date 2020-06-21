import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import { addReminder } from '../../actions'
import 'react-datepicker/dist/react-datepicker.css'

const ReminderEdit = ({ display, toggle, isNew, ...props }) => {
  const [date, setDate] = useState(new Date())
  const [editEnable, setEditEnable] = useState(false)
  const [state, setState] = useState({
    description: '',
    city: ''
  })
  
  const { addToast } = useToasts()

  // function for handle data from inputs
  const handleOnChange = (e) => {
    let { name, value } = e.target
    let newState = state
    newState[name] = value
    setState(newState)
  }
  
  const submit = () => {
    if(state.description.length > 0 && state.city.length > 0) {
      const newList = props.reminders
      const formatedDate = moment(date)
      const newReminder = {
        ...state,
        date:formatedDate
      }
      newList.push(newReminder)
      props.addReminder(newList)
    } else {
      console.log(state);
      
      addToast('All fields required', {
        appearance: 'warning',
        autoDismiss: true,
      })    
    }
  }
  
  return (
    <Modal isOpen={display} toggle={toggle}>
      <ModalHeader>
        Reminder
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Description</Label>
            <Input
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
            <Input 
              type="text"
              name="city"
              disabled={isNew ? false : !editEnable}
              onChange={handleOnChange}
              required
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
        </Form>
      </ModalBody>
      <ModalFooter>
        {
          // display buttons depends if is a new reminder or is editing an existing one
          isNew ? 
          <Button onClick={submit} color="primary">Save</Button>
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

const mapStateToProps = ({ remindersList }) => ({
  reminders: remindersList
})

const mapDispatchToProps = {
  addReminder
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderEdit)