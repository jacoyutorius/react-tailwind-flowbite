import React, { useState } from 'react';
import './App.css';
import { Pagination } from "flowbite-react"

import { NavbarComponent } from './components/Navbar';
import { ModalComponent } from './components/Modal';
import { CreateFormComponent } from "./components/CreateForm"
import { CardListComponent } from './components/CardList';
import { FooterComponent } from './components/Footer';

import { useContext } from "react"
export const SelectedMonthContext = React.createContext({month: "202304"})

function App() {
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const toggleCreateModal = () => { setCreateModalOpen(!createModalOpen) }



  return (
    <div className="App">
      <SelectedMonthContext.Provider value={ {month: "202304"} }>

      </SelectedMonthContext.Provider>

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
  );
}

export default App;
