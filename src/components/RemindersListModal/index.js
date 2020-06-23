import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col  } from 'reactstrap'
import ReminderEdit from '../ReminderEdit'
import ReminderDeleteModal from '../ConfirmDelete'

const RemindersList = ({ display, toggle, reminders }) => {
  const [showReminderEdit, setShowReminderEdit] = useState(false)
  const [reminderEditData, setReminderEditData] = useState({})
  const [reminderToDelete, setReminderToDelete] = useState({})
  const [modalDelete, setModalDelete] = useState(false)

  const setDeleteReminder = data => {
    setReminderToDelete(data)
    setModalDelete(true)
  }

  const toggleModalDelete = () => {
    setModalDelete(!modalDelete)
  }
  const toggleModal = () => {
    setShowReminderEdit(!showReminderEdit)
  }

  const handleEdit = (data) => {
    toggle()
    setReminderEditData(data)
    setShowReminderEdit(!showReminderEdit)
  }
  return (
    <>
      <Modal isOpen={display} toggle={toggle} size="xl">
        <ModalHeader toggle={toggle}>Reminders</ModalHeader>
        <ModalBody>
          {
            reminders.map(({ description, date, ...data }, i) => (
              <Row className="mt-2">
                <Col lg="6">
                  <div key={i}>{description}</div>
                </Col>
                <Col lg="4">
                  <div>{date.format("dddd, MMMM Do YYYY, h:mm a")}</div>
                </Col>
                <Col lg="2">
                  <Button onClick={() => handleEdit({description, date, ...data})} className="mr-2" color="primary">Edit</Button>
                  <Button onClick={() => setDeleteReminder({description, date, ...data})} color="danger">Delete</Button>
                </Col>
              </Row>
            ))
          }
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
      <ReminderEdit 
        display={showReminderEdit}
        toggle={toggleModal}
        data={reminderEditData}
      />
      <ReminderDeleteModal 
        toggle={toggleModalDelete}
        display={modalDelete}
        reminderToDelete={reminderToDelete}
      />
    </>
  )
}
export default RemindersList