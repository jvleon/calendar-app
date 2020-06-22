import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 14.28%;
  height: 110px;
  ${({ isWeekend }) => {
    if(isWeekend) return `background-color: rgba(22, 36, 71, .25)`;
  }};
  border: 1px solid black;
  padding: 2px 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const DayNumber = styled.span`
  color: #1f4068;
  font-weight: 500;
  opacity: ${({ currentMonth }) =>  currentMonth ? '1' : '0.5'}
`

export const Reminders = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 80%;
  overflow: hidden;
  font-size: 12px;
  position: relative;
  > .reminder-container {
    cursor: pointer;
    display: flex;
    border-radius: 3px;
    padding: 0;
    height: 20px;
  }
  > .reminder-container .reminder-label {
      width: 85%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background-color: transparent;
      margin-bottom: 2px;
      color: white;
  }
  > .reminder-container .reminder-button {
      width: 15%;
      color: white;
      text-align: center;
      background-color: transparent;
      outline: none;
      border: none;
      margin-bottom: 2px;
      padding: 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    > .reminder-container .reminder-button:hover {
      background-color: rgba(0, 0, 0, .25)
    }
`

export const ToggleButton = styled.span`
  cursor: pointer;
  text-decoration: underline;
`

export const ReminderDetail = styled.div`
  z-index: 999;
  display: ${({ showReminders }) => showReminders ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  width: 300px;
  height: 100px;
  background-color: white;
  border-color: 1px solid #1f4068;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2px;
  overflow: scroll;
`
