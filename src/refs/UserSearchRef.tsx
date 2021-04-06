import { useState, useRef, useEffect } from 'react';

const users = [
  {name: 'Sarah', age: 20},
  {name: 'Alex', age: 20},
  {name: 'Sam', age: 20}
]

/**
 * @desc implement when page is loaded, the text input is automatically focused, so user could type in immediately.
 */
const UserSearchRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [userFound, setUserFound] = useState<{name: string, age: number} | undefined>()

  useEffect(() => {
    // check first, if ref is actually defined
    if (!inputRef.current) return;
    inputRef.current.focus()
  })

  const findOneUser = () => {
   const foundUser = users.find(user => user.name === name);
   setUserFound(foundUser);
  }

  return (
    <div>
      <h4>User Search</h4>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <button onClick={findOneUser}>Find User</button>
      <div>
        {(userFound && userFound.name) || "No User Found"}
        { userFound && userFound.age}
      </div>
    </div>
  )
}

export default UserSearchRef
