import { Navbar, Button, Dropdown } from "flowbite-react"
import { useApi } from "../../hooks/useApi"

import React, { useState, useContext } from "react"

export type NavbarComponentProps = {
  onClick: () => void
}

const months = [
  "202210",
  "202211",
  "202212",
  "202301",
  "202302",
  "202303",
  "202304",
  "202305",
  "202306",
  "202307",
  "202308",
  "202309",
  "202310",
]

type useApiCallType = {
  month: string
}

const useApiCall = ({month}:useApiCallType): any => {
  const { list } = useApi(month);
  console.log(month, list)
}

const dropdownItems = (setMonth: any):any => {
  return months.map(month => {
    return <Dropdown.Item onClick={() => {
      setMonth(month)
      useApiCall({ month })
    }}>{month}</Dropdown.Item>  
  })
}

const selectedMonthContext = React.createContext({month: "202304"})

export const NavbarComponent = (props: NavbarComponentProps): JSX.Element => {
  const [month, setMonth] = useState('202303');
  
  return (
    <Navbar
        className="sticky top-0"
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
       
          <Button onClick={ props.onClick }>
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
            active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/">
            About
          </Navbar.Link>
          <Navbar.Link href="/">
            Services
          </Navbar.Link>
           <Navbar.Link href="/">
            selected: { month }
          </Navbar.Link>
          <Dropdown
            label="Select Month"
            inline={true}
            theme={{ inlineWrapper: "flex items-center text-gray-700" }}
            dismissOnClick={true}>
            { dropdownItems(setMonth) }
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
  )
}