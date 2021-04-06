import ReactDom from 'react-dom';
import GuestList from './practice_state/GuestList'
import UserSearch from './practice_state/UserSearch';
import UsetSearchRef from './refs/UserSearchRef';
import EventComponent from './events/EventComponent';

export const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
      <EventComponent />
      <UsetSearchRef />
    </div>
  )
};

ReactDom.render(<App />, document.querySelector('#root'));
