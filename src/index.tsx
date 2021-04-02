import ReactDom from 'react-dom';
import GuestList from './practice_state/GuestList'
import UserSearch from './practice_state/UserSearch';

export const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
    </div>
  )
};

ReactDom.render(<App />, document.querySelector('#root'));
