import React from 'react'
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { DatePicker } from '@syncfusion/ej2-react-calendars'

import { scheduleData } from '../data/dummy';
import { Header } from '../components'
const Calendar = () => {
  return (
    <div className='m-2 mt-24 bg-white md:m-10 md:p-10 rounded-xl'>
      <Header category="App" title="Calendar" />
      <ScheduleComponent height="650px" eventSettings={{ dataSource: scheduleData}} selectedDate={new Date(2021, 0, 10)}>
        <Inject services={[ Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar