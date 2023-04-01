import { createContext } from "react"

// type monthContextType = {
//   month: any,
//   setMonth: any
// }

export interface MonthContextType {
  month: string,
  setMonth: (month:string) => void
}

const defaultValue: MonthContextType = {
  month: "202304",
  setMonth: () => {}
}

export const SelectedMonthContext = createContext<MonthContextType>(defaultValue)