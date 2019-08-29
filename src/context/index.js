import { createContext } from 'react';

export const Context = createContext({
  tasks: [],
  name: '',
  status: true,
});

export const ContextProvider = Context.Provider;
