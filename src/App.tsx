import React from 'react';
import './App.css';
import { Card } from "flowbite-react"

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
      <header>
        <nav className="bg-white border-gray-200 md:px-4 py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            <a href="https://flowbite.com" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <div className="flex items-center md:order-2">
                <a href="/" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
                <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a>
                <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div id="mega-menu" className="items-center justify-between hidden w-full text-sm md:flex md:w-auto md:order-1">
                <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        { createCard() }
        { createCard() }
        { createCard() }
        { createCard() }
        { createCard() }
        { createCard() }
      </div>   

      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">Licensing</a>
          </li>
          <li>
            <a href="/" className="hover:underline">Contact</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
