interface ChildPorps {
  color: string;
  handleClick: () => void;
}

export const Child = ({ color, handleClick}: ChildPorps) => {
  return (
    <div>
      {color}
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export const ChildAsFC: React.FC<ChildPorps> = ({ color, handleClick  }) => {
  return (
    <div>
      {color}
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

