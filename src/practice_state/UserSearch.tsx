import { useState } from 'react';

const users = [
  {name: 'Sarah', age: 20},
  {name: 'Alex', age: 20},
  {name: 'Sam', age: 20}
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [userFound, setUserFound] = useState<{name: string, age: number} | undefined>()

  const findOneUser = () => {
   const foundUser = users.find(user => user.name === name);
   setUserFound(foundUser);
  }

  return (
    <div>
      <h4>User Search</h4>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={findOneUser}>Find User</button>
      <div>
        {(userFound && userFound.name) || "No User Found"}
        { userFound && userFound.age}
      </div>
    </div>
  )
}

export default UserSearch
