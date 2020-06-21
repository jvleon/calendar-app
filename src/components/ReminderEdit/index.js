import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'

const ReminderEdit = ({ display, toggle }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [editEnable, setEditEnable] = useState(false)
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
              disabled={!editEnable}
            />
          </FormGroup>
          <FormGroup>
            <Label>City</Label>
            <Input 
              type="text"
              name="city"
              disabled={!editEnable}
            />
          </FormGroup>
          <FormGroup>
            <Label>Time</Label>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              disabled={!editEnable}
            />
          </FormGroup>
          <FormGroup>
            <Label>Date</Label>
            <DatePicker
              showPopperArrow={false}
              selected={startDate}
              onChange={date => setStartDate(date)}
              disabled={!editEnable}
            />          
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => setEditEnable(!editEnable)}>Edit</Button>
        <Button color="danger" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  )
}

export default ReminderEdit