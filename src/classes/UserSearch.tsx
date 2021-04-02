import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSeachProps {
  // arraof object
  users: User[]
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSeachProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  }

  findOneUser = () => {
    const foundUser = this.props.users.find(user => user.name === this.state.name);
    this.setState({user: foundUser});
   }

  render() {
    const { user, name } = this.state
    return (
      <div>
        <h4>User Search</h4>
        <input value={name} onChange={e => this.setState(e.target.value)} />
        <button onClick={this.findOneUser}>Find User</button>
        <div>
          {(user && user.name) || "No User Found"}
          { user && user.age}
        </div>
      </div>
    )
  }
}

export default UserSearch;
