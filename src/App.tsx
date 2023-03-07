import React, { useState } from 'react';
import './App.css';
import { Pagination } from "flowbite-react"

import { NavbarComponent } from './components/Navbar';
import { ModalComponent } from './components/Modal';
import { CreateFormComponent } from "./components/CreateForm"
import { CardListComponent } from './components/CardList';
import { FooterComponent } from './components/Footer';

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const toggleModal = () => { setModalOpen(!modalOpen) }

  return (
    <div className="App">
      <ModalComponent
        modalOpen={ modalOpen }
        onClose={toggleModal}>
        <CreateFormComponent />
      </ModalComponent>

      <NavbarComponent onClick={ toggleModal } />

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
