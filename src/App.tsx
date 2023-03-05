import React, { useState } from 'react';
import './App.css';
import { Card, Pagination, TextInput } from "flowbite-react"

import { NavbarComponent } from './components/Navbar';
// import { CreateFormComponent } from './components/CreateForm';
import { ModalComponent } from './components/Modal';
import { FooterComponent } from './components/Footer';

function createCard(index: number) {
  return (
    <div key={index} className="max-w-none p-2">
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
    </div>
  )
}

function Cards() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((v, i) => createCard(i))
}

const initialFormState = {
  content: ""
}

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const toggleModal = () => { setModalOpen(!modalOpen) }

  const [formData, setFormData] = useState(initialFormState)

  return (
    <div className="App">
      <ModalComponent
        modalOpen={ modalOpen }
        onClose={ toggleModal }
      />

      <NavbarComponent onClick={ toggleModal } />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {/* {Cards()} */}

        <label>{ formData.content }</label>
        <TextInput type="text" value={formData.content} onChange={e => setFormData({
          ...formData,
          content: e.target.value
        })}
        />
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
