import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Context, ContextProvider } from './context';
import { Form, Tasks } from './components';

const App = () => {
  const initialState = useContext(Context);
  // const [state, setState] = useState(initialState);
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('this.state .....', state);

  return (
    <ContextProvider value={initialState}>
      
      <div className="App">
        <Form />
        <Tasks />
      </div>
    </ContextProvider>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
