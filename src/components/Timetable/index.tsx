import { SlideItemModel } from '@site/src/css/SlideItemModel';
import { createGridArea } from '@site/src/utils/create-grid-area';
import { useKeenSlider } from 'keen-slider/react';
import React from 'react';
import { EmptyCell } from '../../css/EmptyCell'
import { TimeProps } from '../Sidebar';
import { SlideItem } from '../SlideItem/SlideItem';
import { Container, SlideItemContainer, Slide } from './styles';

export interface ClassesProps {
  subject: string;
  size: number;
  teacher?: string;
  classroom?: string;
  students?: string;
  time: string;
  y?: number;
  link: Array<
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
}

const or = 2 //OFFSET ROW
const oc = 1 //OFFSET COL
let count = 0
let boxes

function generateEmptyCells(cols: number, rows: number) {
  boxes = []
  let row = 1
  let col = 0
  
  for (let index = 0; index < 90; index++) {
    if ( col < cols ) 
      col++
    else if (row < rows){ 
      col = 1
      row+=1
    }
    boxes.push({
      title: (row + or) === 5 ||
             (row + or) ===  9 ||
             (row + or) ===  12 ||
             (row + or) === 15 ||
             (row + or) === 18
             ? 'Intervalo' : '',
      ga: `${or + row} / ${oc + col} / ${or + row + 1} / ${oc + col + 1}`,
      className: `empty ${((col + oc) === 2 && (row + or) === 9) ? 'break-here' : ''}`
    })
  }
}

export function Timetable(props: { timetable: TimetableProps, time: TimeProps[] }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 5,
      spacing: 10  
    },
    breakpoints: {
      "(max-width: 594px)": {
        slides: {
          perView: 1,
        },
      },
      "(min-width: 595px) and (max-width: 695px)":{
        slides: {
          perView: 2
        }
      },
      "(min-width: 696px) and (max-width: 796px)":{
        slides: {
          perView: 3
        }
      },
      "(min-width: 797px) and (max-width: 896px)":{
        slides: {
          perView: 4
        }
      },
      "(min-width: 897px) and (max-width: 996px)":{
        slides: {
          perView: 5
        }
      },
      "(min-width: 997px) and (max-width: 1096px)":{
        slides: {
          perView: 3
        }
      },
      "(min-width: 1097px) and (max-width: 1196px)":{
        slides: {
          perView: 4
        }
      },
      "(min-width: 1197px)":{
        slides: {
          perView: 5,
          spacing: 2
        }
      }
    }
  })
  
  return (
    <Container ref={sliderRef}>
      {
        props.timetable.weekClasses.map(dayClass => {
          let index = props.timetable.weekClasses.findIndex(value => value.title === dayClass.title)
          return (
            <Slide rowsSize={props.timetable.rowsSize} className={`keen-slider__slide number-slide${index + 1}`} key={index}>
              <SlideItemContainer gridArea='1 / 1 / 2 / 2'>
                <SlideItemModel>
                  <span>{dayClass.title}</span>
                </SlideItemModel>
              </SlideItemContainer>
              {
                dayClass.timetable.map(day => {
                  return (
                    <SlideItemContainer gridArea={createGridArea({y: day.y, x: 1}, day.size)} key={count++}>
                      <SlideItem timetable={day}/>
                    </SlideItemContainer>
                  )
                })
              }
            </Slide>
          )
        })
      }
      </Container>
  )
}
