export type CalendarDayEventProps = {
  eventName: string,
  url: string | null
}

export type CalendarDayComponentProps = {
  day: any,
  isFirstWeek: boolean,
  events: Array<CalendarDayEventProps>
}

export const CalendarDayComponent = ({day, isFirstWeek, events}:CalendarDayComponentProps): JSX.Element => {
  return (<div className="border border-gray-200 flex flex-col">
    <header className="flex flex-col items-center">
      {isFirstWeek && <p className="text-sm mt-1">{day.format("ddd")}</p>}
        <p className={"text-sm p-1 my-1 text-center"}>{day.format("YYYY/MM/DD")}</p>
    </header>
    <div className="p-2">
      { events.map((event:CalendarDayEventProps) => {
       return ( <p className="text-sm">{ event.eventName }</p>)
      }) }
    </div>
  </div>)
}