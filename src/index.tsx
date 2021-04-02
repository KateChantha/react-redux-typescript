import ReactDom from 'react-dom';

export const App = () => {
  return (
    <div>
      <h1>Hi there</h1>
    </div>
  )
};

ReactDom.render(<App />, document.querySelector('#root'));
