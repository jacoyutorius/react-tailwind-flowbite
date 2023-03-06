import { Card } from "flowbite-react"

export type CardComponentProps = {
  eventName: string,
  description: string,
  startedOn: string,
  url: string
}

export const CardComponent = (props: CardComponentProps):JSX.Element => {
  return (
    <div className="max-w-none p-2">
      <Card href='' className=""> 
        <p>{ props.startedOn }</p>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          { props.eventName }
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      </Card>
    </div>
  )
}