import React, { useState } from 'react';
import './App.css';
import { Pagination } from "flowbite-react"

import { NavbarComponent } from './components/Navbar';
import { ModalComponent } from './components/Modal';
import { CreateFormComponent } from "./components/CreateForm"
import { CardListComponent } from './components/CardList';
import { FooterComponent } from './components/Footer';

import { SelectedMonthContext } from "./SelectedMonthContext"
import { EventListContext } from './EventListContext';

function App() {
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const toggleCreateModal = () => { setCreateModalOpen(!createModalOpen) }
  const [month, setMonth] = useState("202304")
  const [eventList, setEventList] = useState([])

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

        <FooterComponent />
      </div>
      </SelectedMonthContext.Provider>
      </EventListContext.Provider>
  );
}

export default App;
