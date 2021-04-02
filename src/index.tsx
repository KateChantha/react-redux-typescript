import ReactDom from 'react-dom';
import GuestList from './practice_state/GuestList'

export const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  )
};

ReactDom.render(<App />, document.querySelector('#root'));
