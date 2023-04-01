import { createContext } from "react"

const defaultValue: any = [
  "202304",
  () => { }
]
export const SelectedMonthContext = createContext(defaultValue);