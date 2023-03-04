import React, { useState } from 'react';
import './App.css';
import { Button, Modal, Label, TextInput, Checkbox, Card, Pagination, Footer } from "flowbite-react"

import { NavbarComponent } from './components/Navbar';
import { FooterComponent } from './components/Footer';

function createCard() {
  return (
    <div className="max-w-none p-2">
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

function ModalFormBody() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Your email"
          />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          type="password"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="large"
            value="Large input"
          />
        </div>
        <TextInput
          id="large"
          type="text"
          sizing="lg"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">
        Submit
      </Button>
    </form>
  )
}

function ModalForm(modalOpen: boolean, toggleModal: any ) {
  return (
    <React.Fragment>
        <Modal
          show={modalOpen}
          onClose={ toggleModal }
          size="4xl"
        >
          <Modal.Header>
            Terms of Service
          </Modal.Header>
          <Modal.Body>
            { ModalFormBody() }
          </Modal.Body>
        </Modal>
      </React.Fragment>
  )
}

function Cards() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(v => createCard())
}

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const toggleModal = () => { setModalOpen(!modalOpen) }

  return (
    <div className="App">
      { ModalForm(modalOpen, toggleModal) }

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
