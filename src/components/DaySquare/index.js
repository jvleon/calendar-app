import React, { useState } from 'react'
import { MainContainer, DayNumber, Reminders, ToggleButton } from './styled'
import RemindersListModal from '../RemindersListModal'
import ReminderEdit from '../ReminderEdit'

const reminders = [
  {
    description: 'Visita a los lagos'
  },
  {
    description: 'Visita a la monatanha con los amigos'
  },
  {
    description: 'Cita con el doctor'
  },
  {
    description: 'Cine'
  },
  {
    description: 'Cenas'
  }
]

const DaySquare = ({ day, nameDay }) => {
  const [showRemindersList, setShowRemindersList] = useState(false)
  const [showReminderEdit, setShowReminderEdit] = useState(false)
  const toggleModal = () => {
    setShowRemindersList(!showRemindersList)
  }

  return (
    <MainContainer isWeekend={nameDay === 'saturday' || nameDay === 'sunday'}>
      <DayNumber>{day}</DayNumber>
      <Reminders>
        {
          reminders.map(({ description }, i) => {
            // only renders the first 3 reminders on the calendar for each day
            if(i < 3) 
              return <div onClick={() => setShowReminderEdit(!showReminderEdit)} key={i} className="reminder-label">
                        {description}
                      </div>
          })
        }
        {
          reminders.length > 3 &&
            <ToggleButton onClick={toggleModal}>Show more</ToggleButton>
        }
      </Reminders>
      <ReminderEdit display={showReminderEdit} toggle={() => setShowReminderEdit(!showReminderEdit)} />
      <RemindersListModal display={showRemindersList} toggle={toggleModal} reminders={reminders} />
    </MainContainer>
  )
}

export default DaySquare