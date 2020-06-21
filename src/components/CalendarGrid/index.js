import React, { useState } from 'react'
import {
  MainContainer,
  CalendarHeader,
  CalendarHeaderItem,
  CalendarBody,
  ControlMenu
} from './styled'
import DaySquare from '../DaySquare'
import { Button } from 'reactstrap'
import ReminderEdit from '../ReminderEdit'

const month = [
  { day: 31, nameDay: 'sunday' },
  { day: 1, nameDay: 'monday' },
  { day: 2, nameDay: 'tuesday' },
  { day: 3, nameDay: 'wednesday' },
  { day: 4, nameDay: 'thursday' },
  { day: 5, nameDay: 'friday' },
  { day: 6, nameDay: 'saturday' },
  { day: 7, nameDay: 'sunday' },
  { day: 8, nameDay: 'monday' },
  { day: 9, nameDay: 'tuesday' },
  { day: 10, nameDay: 'wednesday' },
  { day: 11, nameDay: 'thursday' },
  { day: 12, nameDay: 'friday' },
  { day: 13, nameDay: 'saturday' },
  { day: 14, nameDay: 'sunday' },
  { day: 15, nameDay: 'monday' },
  { day: 16, nameDay: 'tuesday' },
  { day: 17, nameDay: 'wednesday' },
  { day: 18, nameDay: 'thursday' },
  { day: 19, nameDay: 'friday' },
  { day: 20, nameDay: 'saturday' },
  { day: 21, nameDay: 'sunday' },
  { day: 22, nameDay: 'monday' },
  { day: 23, nameDay: 'tuesday' },
  { day: 24, nameDay: 'wednesday' },
  { day: 25, nameDay: 'thursday' },
  { day: 26, nameDay: 'friday' },
  { day: 27, nameDay: 'saturday' },
  { day: 28, nameDay: 'sunday' },
  { day: 29, nameDay: 'monday' },
  { day: 30, nameDay: 'tuesday' },
  { day: 1, nameDay: 'wednesday' },
  { day: 2, nameDay: 'thursday' },
  { day: 3, nameDay: 'friday' },
  { day: 4, nameDay: 'saturday' },
]

const CalendarGrid = () => {
  const [displayModal, setDisplayModal] = useState(false)
  const toggleModal = () => setDisplayModal(!displayModal)
  return (
    <>
      <ControlMenu>
        <Button
          color="primary"
          onClick={toggleModal}
        >
          New reminder +
        </Button>
      </ControlMenu>
      <MainContainer>
        <CalendarHeader>
          <CalendarHeaderItem>
            Sunday
          </CalendarHeaderItem>
          <CalendarHeaderItem>
            Monday
          </CalendarHeaderItem>
          <CalendarHeaderItem>
            Tuesday
          </CalendarHeaderItem>
          <CalendarHeaderItem>
            Wednesday
          </CalendarHeaderItem>
          <CalendarHeaderItem>
            Thursday
          </CalendarHeaderItem>
          <CalendarHeaderItem>
            Friday
          </CalendarHeaderItem>
          <CalendarHeaderItem>
            Saturday
          </CalendarHeaderItem>
        </CalendarHeader>
        <CalendarBody>
          {
            month.map(({ day, nameDay }, i) => (
              <DaySquare day={day} nameDay={nameDay} key={i} />
            ))
          }
        </CalendarBody>
      </MainContainer>
      <ReminderEdit 
        display={displayModal}
        toggle={toggleModal}
        isNew
      />
    </>
  )
}

export default CalendarGrid