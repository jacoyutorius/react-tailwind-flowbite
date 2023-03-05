import React, { useState } from 'react';
import './App.css';
import { Pagination } from "flowbite-react"

import { NavbarComponent } from './components/Navbar';
import { ModalComponent } from './components/Modal';
import { FooterComponent } from './components/Footer';

import { CardComponent } from './components/Card';

function Cards() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((v, i) => {
    return (<CardComponent key={i}></CardComponent>)
  })
}

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const toggleModal = () => { setModalOpen(!modalOpen) }

  return (
    <div className="App">
      <ModalComponent
        modalOpen={ modalOpen }
        onClose={ toggleModal }
      />

      <NavbarComponent onClick={ toggleModal } />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {Cards()}
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
