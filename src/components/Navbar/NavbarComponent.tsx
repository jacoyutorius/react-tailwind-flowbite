import React, { useContext } from "react"
import { Navbar, Button, Dropdown } from "flowbite-react"
import { useApi } from "../../hooks/useApi"
import { SelectedMonthContext } from "../../SelectedMonthContext"
import { EventListContext } from "../../EventListContext"

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

const dropdownItems = (setMonth: any, setEventList: any): any => {
  const ClickEvent = (month:string) => {
    setMonth(month)
    const { list } = useApi(month);
    setEventList(list)
  }

  return months.map(month => {
    return (
      <Dropdown.Item onClick={() => ClickEvent(month)}>
        {month}
      </Dropdown.Item>  
    )
  })
}

export const NavbarComponent = (props: NavbarComponentProps): JSX.Element => {
  const { month, setMonth } = useContext(SelectedMonthContext)
  const { setEventList } = useContext(EventListContext)

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
        <Dropdown
          label={month}
          inline={true}
          theme={{ inlineWrapper: "flex items-center text-gray-700" }}
          dismissOnClick={true}>
          { dropdownItems(setMonth, setEventList) }
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}