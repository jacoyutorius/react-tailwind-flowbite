import React, { useState } from 'react';
import './App.css';
import { Navbar, Button, Modal, Card, Footer } from "flowbite-react"

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

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const toggleModal = () => { setModalOpen(!modalOpen) }

  return (
    <div className="App">
      <React.Fragment>
        <Modal
          show={modalOpen}
          onClose={toggleModal}
          size="4xl"
        >
          <Modal.Header>
            Terms of Service
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={toggleModal} >
              I accept
            </Button>
            <Button
              color="gray"
              onClick={toggleModal}
            >
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>

      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex gap-x-1 md:order-2">
          <a href="/" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
       
          <Button onClick={toggleModal}>
            Show Modal
          </Button>
          <Button>
            Get started
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/">
            About
          </Navbar.Link>
          <Navbar.Link href="/">
            Services
          </Navbar.Link>
          <Navbar.Link href="/">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        { createCard() }
        { createCard() }
        { createCard() }
        { createCard() }
        { createCard() }
        { createCard() }
      </div>

      <Footer container={true} className="fixed bottom-0 left-0 z-20">
        <Footer.Copyright
          href="#"
          by="Flowbite™"
          year={2022}
        />
        <Footer.LinkGroup>
          <Footer.Link href="#">
            About
          </Footer.Link>
          <Footer.Link href="#">
            Privacy Policy
          </Footer.Link>
          <Footer.Link href="#">
            Licensing
          </Footer.Link>
          <Footer.Link href="#">
            Contact
          </Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
}

export default App;
