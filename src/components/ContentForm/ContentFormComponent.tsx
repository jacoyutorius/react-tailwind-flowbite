export type ContentFormComponentProps = {
  index: number,
  no: number,
  category: string,
  organizer: string
}

export const ContentFormComponent = ({ index, no, category, organizer }: ContentFormComponentProps):JSX.Element => {
  return (<div>
    <p>this is test</p>   
    <p>{ index }</p>
    <p>{ no }</p>
    <p>{ category }</p>
    <p>{ organizer }</p>
  </div>)
}