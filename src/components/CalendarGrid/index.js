import React from 'react'
import { MainContainer, CalendarHeader, CalendarHeaderItem, CalendarBody } from './styled'
import DaySquare from '../DaySquare'

const month = [
  { day: 30 },
  { day: 1 },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 6 },
  { day: 7 },
  { day: 8 },
  { day: 9 },
  { day: 10 },
  { day: 11 },
  { day: 12 },
  { day: 13 },
  { day: 14 },
  { day: 15 },
  { day: 16 },
  { day: 17 },
  { day: 18 },
  { day: 19 },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 30 },
  { day: 1 },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 30 },
  { day: 1 },
  { day: 2 },
  { day: 3 },
  { day: 4 }
]

const CalendarGrid = () => (
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
        month.map(({ day, }, i) => (
          <DaySquare day={day} key={i} />
        ))
      }
    </CalendarBody>
  </MainContainer>
)

export default CalendarGrid