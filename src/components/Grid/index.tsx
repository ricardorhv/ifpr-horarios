import React from 'react'
import { Container } from './styles'
import { Header } from '../Header'
import { Sidebar, TimeProps } from '../Sidebar'
import { Timetable, WeekClassesProps } from '../Timetable'
import { findPositionY } from '@site/src/utils/find-position-y'
import { reduceTimetable } from '@site/src/utils/reduce-timetable'
import { createLinkToTheCell } from '@site/src/utils/create-link-to-the-cell'
import { createGroupItems } from '@site/src/utils/create-group-items'

export interface GridProps {
  title: string;
  time: Array<TimeProps>;
  weekClasses: Array<WeekClassesProps>;
}
  
export function Grid ({ title, time, weekClasses}: GridProps) {
  findPositionY({weekClasses, time})
  createLinkToTheCell({weekClasses, title})
  const numbersBetween = reduceTimetable(weekClasses)
  // time = time.slice(numbersBetween[0], numbersBetween[1])
  findPositionY({weekClasses, time})

  let rowsSize = ''
  let columnsSize = `10fr 90fr`
  time.forEach(el => {
    rowsSize += ` ${el.size}fr`
  })
  
  let size = 0;
  time.forEach(el => {
    size += el.size
  })
  

  return(
    <Container columns={columnsSize} size={size}>
      <Header title={title}/>
      <Sidebar timeClasses={time} rows={`100px${rowsSize}`}/>
      <Timetable timetable={{weekClasses, rowsSize}} time={time}/>
    </Container>
  )
}
