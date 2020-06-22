import React, { useState } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
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
  { month: 4, day: 31, nameDay: 'sunday' },
  { month: 5 ,day: 1, nameDay: 'monday' },
  { month: 5 ,day: 2, nameDay: 'tuesday' },
  { month: 5 ,day: 3, nameDay: 'wednesday' },
  { month: 5 ,day: 4, nameDay: 'thursday' },
  { month: 5 ,day: 5, nameDay: 'friday' },
  { month: 5 ,day: 6, nameDay: 'saturday' },
  { month: 5 ,day: 7, nameDay: 'sunday' },
  { month: 5 ,day: 8, nameDay: 'monday' },
  { month: 5 ,day: 9, nameDay: 'tuesday' },
  { month: 5 ,day: 10, nameDay: 'wednesday' },
  { month: 5 ,day: 11, nameDay: 'thursday' },
  { month: 5 ,day: 12, nameDay: 'friday' },
  { month: 5 ,day: 13, nameDay: 'saturday' },
  { month: 5 ,day: 14, nameDay: 'sunday' },
  { month: 5 ,day: 15, nameDay: 'monday' },
  { month: 5 ,day: 16, nameDay: 'tuesday' },
  { month: 5 ,day: 17, nameDay: 'wednesday' },
  { month: 5 ,day: 18, nameDay: 'thursday' },
  { month: 5 ,day: 19, nameDay: 'friday' },
  { month: 5 ,day: 20, nameDay: 'saturday' },
  { month: 5 ,day: 21, nameDay: 'sunday' },
  { month: 5 ,day: 22, nameDay: 'monday' },
  { month: 5 ,day: 23, nameDay: 'tuesday' },
  { month: 5 ,day: 24, nameDay: 'wednesday' },
  { month: 5 ,day: 25, nameDay: 'thursday' },
  { month: 5 ,day: 26, nameDay: 'friday' },
  { month: 5 ,day: 27, nameDay: 'saturday' },
  { month: 5 ,day: 28, nameDay: 'sunday' },
  { month: 5 ,day: 29, nameDay: 'monday' },
  { month: 5 ,day: 30, nameDay: 'tuesday' },
  { month: 6, day: 1, nameDay: 'wednesday' },
  { month: 6, day: 2, nameDay: 'thursday' },
  { month: 6, day: 3, nameDay: 'friday' },
  { month: 6, day: 4, nameDay: 'saturday' },
]

const CalendarGrid = (props) => {
  const [displayModal, setDisplayModal] = useState(false)
  const toggleModal = () => setDisplayModal(!displayModal)
  const currentMonth = 5
  console.log(props)
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
            month.map(({ day, nameDay, month }, i) => {
              const today = moment().date(day).month(month);
              const todayReminders = props.reminders.filter(({ date }) => date.isSame(today, 'day'))
              return (
                <DaySquare day={day} currentMonth={currentMonth} month={month} nameDay={nameDay} key={i} reminders={todayReminders} />
              )
            })
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

const mapStateToProps = ({ reminders }) => ({
  reminders: reminders.remindersList
})

export default connect(mapStateToProps, null)(CalendarGrid)