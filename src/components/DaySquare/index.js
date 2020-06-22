import React, { useState } from 'react'
import { MainContainer, DayNumber, Reminders, ToggleButton } from './styled'
import RemindersListModal from '../RemindersListModal'
import ReminderEdit from '../ReminderEdit'
import ReminderDeleteModal from '../ConfirmDelete'

const DaySquare = ({ day, nameDay, reminders, currentMonth, month }) => {
  const [showRemindersList, setShowRemindersList] = useState(false)
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
    setShowRemindersList(!showRemindersList)
  }

  const handleEdit = (data) => {
    setReminderEditData(data)
    setShowReminderEdit(!showReminderEdit)
  }

  return (
    <MainContainer isWeekend={nameDay === 'saturday' || nameDay === 'sunday'}>
      <DayNumber currentMonth={currentMonth === month}>{day}</DayNumber>
      <Reminders>
        {
          reminders.map(({ description, color, ...data }, i) => {
            // only renders the first 3 reminders on the calendar for each day
            if(i < 3) 
              return <div className="reminder-container" style={{ backgroundColor: color }}>
                <div onClick={() => handleEdit({color, description, ...data})} key={i} className="reminder-label">
                  {description}
                </div>
                <button onClick={() => setDeleteReminder({color, description, ...data})} className="reminder-button">x</button>
              </div>
          })
        }
        {
          reminders.length > 3 &&
            <ToggleButton onClick={toggleModal}>Show more</ToggleButton>
        }
      </Reminders>
      <ReminderDeleteModal reminderToDelete={reminderToDelete} toggle={toggleModalDelete} display={modalDelete} />
      <ReminderEdit data={reminderEditData} display={showReminderEdit} toggle={() => setShowReminderEdit(!showReminderEdit)} />
      <RemindersListModal display={showRemindersList} toggle={toggleModal} reminders={reminders} />
    </MainContainer>
  )
}

export default DaySquare