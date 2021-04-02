import ReactDom from 'react-dom';
import GuestList from './practice_state/GuestList'
import UserSearch from './practice_state/UserSearch';
import EventComponent from './events/EventComponent';

export const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  )
};

ReactDom.render(<App />, document.querySelector('#root'));
