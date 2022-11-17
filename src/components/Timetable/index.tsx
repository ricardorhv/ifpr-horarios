import { ItemContent } from '@site/src/css/ItemContent';
import { createGridArea } from '@site/src/utils/create-grid-area';
import { findPositionsUsed } from '@site/src/utils/find-positions-used';
import { useKeenSlider } from 'keen-slider/react';
import React, { useState } from 'react';
import { EmptyCell } from '../EmptyCell';
import { TimeProps } from '../Sidebar';
import { Item } from '../Item';
import { Container, ItemGroup, SlidePage, SlideCell } from './styles';
import { createGroupItems } from '@site/src/utils/create-group-items';

export interface ClassesProps {
  subject: string;
  size: number;
  teacher?: string;
  classroom?: string;
  students?: string;
  time: string;
  y?: number;
  link?: Array<
  {
    title: string;
    url: string;
  }>
}

export interface WeekClassesProps {
  title: string;
  timetable: Array<ClassesProps>;
}

interface TimetableProps {
  weekClasses: Array<WeekClassesProps>;
  rowsSize: string;
  time: TimeProps[];
  isMenuFixed: boolean;
}

let count = 0

export function Timetable({ weekClasses, rowsSize, time, isMenuFixed }: TimetableProps) {
  const timetableSize = weekClasses.length
  const [sliderRef] = useKeenSlider({  
    breakpoints: {
      "(max-width: 594px)": {
        slides: {
          perView: timetableSize - 4,
          spacing: 1,
        },
      },
      "(min-width: 595px) and (max-width: 695px)":{
        slides: {
          perView: timetableSize - 3,
          spacing: 1,
        }
      },
      "(min-width: 696px) and (max-width: 796px)":{
        slides: {
          perView: timetableSize - 2,
          spacing: 1,
        }
      },
      "(min-width: 797px) and (max-width: 896px)":{
        slides: {
          perView: timetableSize - 1,
          spacing: 1,
        }
      },
      "(min-width: 897px) and (max-width: 996px)":{
        slides: {
          perView: timetableSize,
          spacing: 1,
        }
      },
      "(min-width: 997px) and (max-width: 1096px)":{
        slides: {
          perView: timetableSize - 2,
          spacing: 1,
        }
      },
      "(min-width: 1097px) and (max-width: 1196px)":{
        slides: {
          perView: timetableSize - 1,
          spacing: 1,
        }
      },
      "(min-width: 1197px)":{
        slides: {
          perView: timetableSize,
          spacing: 1,
        }, 
      }
    }
  })
  
  return (
    <Container 
      ref={sliderRef}
      isMenuFixed={isMenuFixed}
    >
      {
        weekClasses.map(dayClass => {
          const groupTimetable = createGroupItems(dayClass.timetable)
          let index = weekClasses.findIndex(value => value.title === dayClass.title)
          return (
            <SlidePage className={`keen-slider__slide number-slide${index + 1}`} key={index}>
                <SlideCell rowsSize={rowsSize}>
                  <EmptyCell timeLength={time.length + 1}/>
                </SlideCell>
                <SlideCell rowsSize={rowsSize}>
                  <ItemGroup gridArea='1 / 1 / 2 / 2' className='day'>
                    <ItemContent>
                      <span>{dayClass.title}</span>
                    </ItemContent>
                  </ItemGroup>
                  {
                    Object.keys(groupTimetable).map(group => {
                      let y = groupTimetable[group][0].y
                      let size = groupTimetable[group][0].size
                      return (
                        <ItemGroup gridArea={createGridArea({y, x: 1}, size)} key={count++}>
                          {
                            groupTimetable[group].map(el =>
                              <Item timetable={el} key={count++}/>
                            )
                          }
                        </ItemGroup>
                      )
                    })
                    // dayClass.timetable.map(day => {
                    //   return (
                    //     <ItemGroup gridArea={createGridArea({y: day.y, x: 1}, day.size)} key={count++}>
                    //       <Item timetable={day}/>
                    //     </ItemGroup>
                    //   )
                    // })
                  }
                </SlideCell>
            </SlidePage>
          )
        })
      }
      </Container>
  )
}
