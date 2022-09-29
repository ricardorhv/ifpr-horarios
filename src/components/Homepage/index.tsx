import React from 'react'
import Grid from '../Grid';
import { Container, ContainerText } from './styles'
import { useKeenSlider } from 'keen-slider/react'
const data = {
  title: "IIN2019",
  week: [
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
  ],
  time: [
    {
      time: "07:30 - 08:20",
      size: 50,
    },
    {
      time: "08:20 - 09:10",
      size: 50,
    },
    {
      time: "09:10 - 09:25",
      size: 15,
    },
    {
      time: "09:25 - 10:15",
      size: 50,
    },
    {
      time: "10:15 - 11:05",
      size: 50,
    },
    {
      time: "11:05 - 11:55",
      size: 50,
    },
    {
      time: "11:55 - 13:10",
      size: 75,
    },
    {
      time: "13:10 - 14:00",
      size: 50,
    },
    {
      time: "14:00 - 14:50",
      size: 50,
    },
    {
      time: "14:50 - 15:05",
      size: 15,
    },
    {
      time: "15:05 - 15:55",
      size: 50,
    },
    {
      time: "15:55 - 16:45",
      size: 50,
    },
    {
      time: "16:45 - 19:00",
      size: 135,
    },
    {
      time: "19:00 - 19:50",
      size: 50,
    },
    {
      time: "19:50 - 20:40",
      size: 50,
    },
    {
      time: "20:40 - 21:00",
      size: 20,
    },
    {
      time: "21:00 - 21:50",
      size: 50,
    },
    {
      time: "21:50 - 22:40",
      size: 50,
    },
  ],
  listTimetable: [
    {
      subject: "História III - 194",
      size: 1,
      teacher: "Amilcar Machado Profeta Filho",
      classroom: "Sala 3-1",
      students: "IIN2019",
      x: 4,
      y: 2,
    },
    {
      subject: "Matemática IV - 184",
      size: 2,
      teacher: "Carla Melli Tambarussi",
      classroom: "Sala 3-1",
      students: "IIN2019",
      x: 1,
      y: 4,
    },
    {
      subject: "Matemática IV - 184",
      size: 1,
      teacher: "Carla Melli Tambarussi",
      classroom: "Sala 3-1",
      students: "IIN2019",
      x: 2,
      y: 5,
    },
    {
      subject: "Projeto e Análise de Sistemas - 182",
      size: 2,
      teacher: "Caroline Domingues Porto do Nascimento Barbieri",
      classroom: "Laboratório de Informatica C",
      students: "IIN2019",
      x: 4,
      y: 5,
    },
    {
      subject: "Tópicos Especiais em Linguagem de Programação - 36",
      size: 2,
      teacher: "Caroline Domingues Porto do Nascimento Barbieri",
      classroom: "Sala 3-1",
      students: "IIN2019",
      x: 5,
      y: 4,
    },
    {
      subject: "Tópicos Especiais em Linguagem de Programação - 36",
      size: 1,
      teacher: "Caroline Domingues Porto do Nascimento Barbieri",
      classroom: "Sala 3-1",
      students: "IIN2019",
      x: 4,
      y: 1,
    },
    {
      subject: "Tópicos Especiais em Tecnologia - 35",
      size: 2,
      teacher: "Caroline Domingues Porto do Nascimento Barbieri",
      classroom: "Sala 3-1",
      students: "IIN2019",
      x: 1,
      y: 2,
    },
    {
      subject: "Língua Estrangeira Moderna II - Inglês - 545",
      size: 2,
      teacher: "Celina de Oliveira Barbosa Gomes",
      classroom: "Sala 3-1",
      students: "IIN2019",
      x: 5,
      y: 1,
    },
    {
      subject: "Projeto Final de Curso - 181",
      size: 2,
      teacher: "Douglas Barbosa Sousa",
      classroom: "Laboratório de Informatica C",
      students: "IIN2019",
      x: 1,
      y: 3,
    },
    {
      subject: "Sociologia IV - 192",
      size: 1,
      teacher: "Everaldo Lorensetti",
      classroom: "Sala 3-1",
      students: "IIN2019",
      x: 6,
      y: 5,
    },
    {
      subject: "Filosofia IV - 193",
      size: 1,
      teacher: "Fabio Antônio da Silva",
      classroom: "Sala 3-1",
      students: "IIN2019",
      x: 1,
      y: 5,
    },
    {
      subject: "Geografia III - 195",
      size: 1,
      teacher: "Jhones Donizetti Mendes",
      classroom: "Sala 3-1",
      students: "IIN2019",
      x: 4,
      y: 3,
    },
    {
      subject: "Química IV - 191",
      size: 1,
      teacher: "Kathia Regina Kunzler Bechlin",
      classroom: "Laboratório de Química",
      students: "IIN2019",
      x: 4,
      y: 4,
    },
    {
      subject: "Biologia IV - 196",
      size: 1,
      teacher: "Paula Magalhães Souza Deccache",
      classroom: "Laboratório de Biologia",
      students: "IIN2019",
      x: 5,
      y: 3,
    },
    {
      subject: "Língua Portuguesa IV - 186",
      size: 2,
      teacher: "Pedro Leites Junior",
      classroom: "Sala 3-1",
      students: "IIN2019",
      x: 1,
      y: 1,
    },
    {
      subject: "Língua Portuguesa IV - 186",
      size: 1,
      teacher: "Pedro Leites Junior",
      classroom: "Sala 3-1",
      students: "IIN2019",
      x: 6,
      y: 3,
    },
    {
      subject: "Física IV - 190",
      size: 2,
      teacher: "Polyanna Guimarães e Miranda",
      classroom: "Laboratório de Física",
      students: "IIN2019",
      x: 5,
      y: 2,
    },
  ],
};



export function Homepage() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged() {
      console.log('slide changed')
    },
  })

  return (

    // <Container>
    //   <h1>Para visualizar o novo horário:</h1>
    //   <button>
    //     <a href="../../../docs/intro">Clique aqui</a>
    //   </button>
    // </Container>
    // <div style={{padding: '1rem 0.8rem'}}>
    //   {
    //   <Grid
    //       title={data.title}
    //       weekDays={data.week}
    //       time={data.time}
    //       listClasses={data.listTimetable}
    //     />
    //   }
    // </div>
    <div ref={sliderRef} style={{display: 'flex', width: '100vw', height: '400px', backgroundColor: '#d9d9d9', overflow: 'hidden'}}>
      <div className="keen-slider__slide">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: '100vw'}}>
          <span>Matemática</span>
          <span>Carla Melli</span>
          <span>Sala 03 - Bloco 1</span>
        </div>
      </div>
      <div className="keen-slider__slide">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: '100vw'}}>
          <span>Histórica</span>
          <span>Milton</span>
          <span>Sala 03 - Bloco 1</span>
        </div>
      </div>
      <div className="keen-slider__slide">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: '100vw'}}>
          <span>Biologia</span>
          <span>Paula</span>
          <span>Sala 03 - Bloco 1</span>
        </div>
      </div>
    </div>
    
  )
}