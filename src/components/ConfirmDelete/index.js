import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col  } from 'reactstrap'
import { deleteReminder } from '../../actions'

const ReminderDeleteModal = ({ display, toggle, reminderToDelete, reminders, ...props }) => {

  const onSuccess = () => {
    toggle()
  }

  const onContinue = () => {
    props.deleteReminder(reminderToDelete, reminders, onSuccess)
  }

  return (
    <Modal isOpen={display}>
      <ModalHeader>Delete reminder</ModalHeader>
      <ModalBody>Do you want to continue?</ModalBody>
      <ModalFooter>
        <Row>
          <Col>
            <Button className="mr-2" onClick={onContinue} color="success">Delete</Button>
            <Button onClick={toggle} color="danger">Cancel</Button>
          </Col>
        </Row>
      </ModalFooter>
    </Modal>
  )
}

const mapStateToProps = ({ reminders }) => ({
  reminders: reminders.remindersList
})

const mapDispatchToProps = {
  deleteReminder
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderDeleteModal)