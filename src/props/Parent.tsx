import { ChildAsFC } from './Child'

const Parent = () => {
  return (
    <ChildAsFC color="red" handleClick={() => console.log('Click!!')} >
      This is a Child.
    </ChildAsFC>
  )
}

export default Parent
