import React from 'react'

const EventComponent: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    console.log(event)
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event)
  }

  return (
    <div>
      <h4>Event Component</h4>
      <input onChange={handleChange} />
      {/* <input onChange={(e) => console.log(e)} /> */}
      <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </div>
  )
}

export default EventComponent
