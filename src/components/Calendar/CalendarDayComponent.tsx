export type CalendarDayEventProps = {
  eventName: string,
  url: string | null,
  category: string
}

export type CalendarDayComponentProps = {
  day: any,
  isFirstWeek: boolean,
  events: Array<CalendarDayEventProps>
}

type LinkProps = {
  text: string,
  url: string,
  category: string
}

const Link = ({ text, url, category }: LinkProps): JSX.Element => {
  return (
    <a href={url} className={ `${getLabelColor(category)} text-sm text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300` } target="_blank" rel="noreferrer">
      {text}
    </a>
  )
}

function getLabelColor(category:string) {
  if (category === "イベント") {
    return "bg-blue-100 text-blue-800"
  }
  else {
    return "bg-gray-100 text-gray-800"
  }
}

function getDateColor(day:any) {
  const date = day.format("d")
  
  if (date === '0') {
    return "bg-red-100"
  }
  else if (date === '6') {
    return "bg-blue-100"
  }
  else {
    return "bg-gray-100"
  }
}

export const CalendarDayComponent = ({ day, isFirstWeek, events }: CalendarDayComponentProps): JSX.Element => {
  const linkComponents = events.map((event:CalendarDayEventProps) => {
    return (<div>
      <Link text={ event.eventName } url={ event.url || "" } category={ event.category }></Link>
    </div>)
  })

  const headBgColor = getDateColor(day)

  return (<div className="border border-gray-200 flex flex-col">
    <header className={`flex flex-col items-center ${headBgColor}`}>
      {isFirstWeek && <p className="text-sm mt-1">{day.format("ddd")}</p>}
        <p className={"text-md p-1 my-1 text-center"}>{day.format("DD")}</p>
    </header>
    <div className="p-2">
      { linkComponents }
    </div>
  </div>)
}