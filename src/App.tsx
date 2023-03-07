import React, { useState } from 'react';
import './App.css';
import { Pagination } from "flowbite-react"

import { NavbarComponent } from './components/Navbar';
import { ModalComponent } from './components/Modal';
import { CreateFormComponent } from "./components/CreateForm"
import { CardListComponent } from './components/CardList';
import { FooterComponent } from './components/Footer';

function App() {
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const toggleCreateModal = () => { setCreateModalOpen(!createModalOpen) }

  // const [contentModalOpen, setContentModalOpen] = useState(false)
  // const toggleContentModal = () => { setContentModalOpen(!contentModalOpen) }

  return (
    <div className="App">
      {/* 登録フォームモーダル */}
      <ModalComponent
        modalOpen={ createModalOpen }
        onClose={ toggleCreateModal }>
        <CreateFormComponent />
      </ModalComponent>

      {/* コンテンツモーダル */}
      {/* <ModalComponent
        modalOpen={ contentModalOpen }
        onClose={ toggleContentModal }>
        { "test" }
      </ModalComponent> */}

      <NavbarComponent onClick={ toggleCreateModal } />

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
