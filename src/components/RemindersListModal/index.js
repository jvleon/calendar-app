import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap'

const RemindersList = ({ display, toggle, reminders }) => (
  <>
    <Modal isOpen={display} toggle={toggle}>
      <ModalHeader toggle={toggle}>Reminders</ModalHeader>
      <ModalBody>
        {
          reminders.map(({ description }, i) => (
            <div key={i}>{description}</div>
          ))
        }
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  </>
)
export default RemindersList