import { Navbar, Button } from "flowbite-react"
import { DropdownComponent as Dropdown } from "../Dropdown"

export type NavbarComponentProps = {
  onClick: () => void
}

const months = [
  "2023/04",
  "2023/05",
  "2023/06",
  "2023/07",
  "2023/08",
  "2023/09",
  "2023/10",
]

const dropdownItems = ():any => {
  return months.map(month => {
    return <Dropdown.Item onClick={() => { alert(month) }}>{ month }</Dropdown.Item>  
  })
}

export const NavbarComponent = (props: NavbarComponentProps): JSX.Element => {
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
            label="Select Month"
            arrowIcon={true}
            inline={true}
            floatingArrow={true}>
            { dropdownItems() }
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
  )
}