import React, { useState, useEffect } from 'react';
import './App.css';
import { Pagination, Toast, Card } from "flowbite-react"

import { NavbarComponent } from './components/Navbar';
import { ModalComponent } from './components/Modal';
import { CreateFormComponent } from "./components/CreateForm"
import { CardListComponent } from './components/CardList';
import { FooterComponent } from './components/Footer';

import { CalendarComponent } from './components/Calendar';

import { SelectedMonthContext } from "./hooks/SelectedMonthContext"
import { EventListContext } from './hooks/EventListContext';

import dayjs from 'dayjs';

const NoCard = () => {
  return (
    <div className="space-x-4 divide-x divide-gray-200 dark:divide-gray-700">
      <Toast>
        {/* <FaTelegramPlane className="h-5 w-5 text-blue-600 dark:text-blue-500" /> */}
        <div className="pl-4 text-sm font-normal">
          イベント情報が登録されていません。
        </div>
      </Toast>
    </div>
  );
}

function getMonth(year:number, month:number) {
  // const year = dayjs().year()
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()
  let currentMonthCount = 0 - firstDayOfTheMonth
  const daysMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++
      return dayjs(new Date(year, month, currentMonthCount))
    })
  })

  return daysMatrix
}

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month)
  const lastDay = new Date(year, month + 1, 0)

  let list = []

  let next = firstDay;
  while (next.getTime() !== lastDay.getTime()) {
    list.push(next)
    next = new Date(next.getFullYear(), next.getMonth(), next.getDate() + 1)
  }

  return list
}

function App() {
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const toggleCreateModal = () => { setCreateModalOpen(!createModalOpen) }
  const [month, setMonth] = useState("202304")
  const [eventList, setEventList] = useState<any[]>([])

  const calendar = getMonth(Number(month.substring(0, 4)), Number(month.substring(4, 6)) - 1)

  
  // const [eventListByDay, setEventListByDay] = useState({})

  // useEffect(() => {
  //   const curYear = Number(month.substring(0, 4))
  //   const curMonth = Number(month.substring(5, 7)) - 1
  //   const monthDays = getMonthDays(curYear, curMonth)
  //   const list: any = {}

  //   monthDays.forEach(day => {
  //     const yyyymmdd = dayjs(day).format("YYYY-MM-DD")
  //     let filtered = eventList.filter(event => event?.StartedOn === yyyymmdd)
  //     list[yyyymmdd] = filtered
  //   })

  //   setEventListByDay(list)
  // }, [month, eventList])
  
  // console.log({eventListByDay})

  
  return (
    <EventListContext.Provider value={ {eventList, setEventList} }>
    <SelectedMonthContext.Provider value={ {month, setMonth} }>
      <div className="App">
        {/* 登録フォームモーダル */}
        <ModalComponent
          modalOpen={ createModalOpen }
          onClose={ toggleCreateModal }>
          <CreateFormComponent />
        </ModalComponent>

        <NavbarComponent onClick={toggleCreateModal} />

        {/* { eventList.length === 0 &&
          <div className="flex justify-center my-32">
            <NoCard /> 
          </div>} */}


        <div className="h-screen flex flex-col mb-20 md:mx-2">
          <CalendarComponent calendar={calendar}></CalendarComponent>
        </div>
          
        { eventList.length > 0 &&
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              <CardListComponent />
            </div>
            <div className="grid grid-cols-1 mb-20 ml-2 md:grid-cols-3 lg:grid-cols-4">
              <Pagination
                currentPage={1}
                layout="navigation"
                totalPages={100}
                showIcons={true}
                onPageChange={ () => { "do nothing" }} />
           </div>
        </>}

        <FooterComponent />
      </div>
    </SelectedMonthContext.Provider>
    </EventListContext.Provider>
  );
}

export default App;
