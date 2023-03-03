import React from 'react';
import './App.css';
import { Navbar, Button, Card, Footer } from "flowbite-react"

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
  return (
    <div className="App">
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
        <div className="flex md:order-2">
          <a href="/" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
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
