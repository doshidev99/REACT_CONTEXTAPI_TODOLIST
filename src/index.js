import React, { useContext, useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Context, ContextProvider } from './context';
import { reducer } from './reducers';
import { Form, Tasks } from './components';

const App = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (localStorage.getItem('tasks')) {
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      dispatch({ type: 'GET_TASK', payload: tasks });
    }
  }, []);
  console.log('index', state);
  
  return (
    <ContextProvider value={{ state, dispatch }}>
      <Form />
      <Tasks />
    </ContextProvider>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
