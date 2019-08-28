import { createContext } from 'react';

export const Context = createContext({
  tasks: [
    { id: '9be9f7', name: 'phạm đông trường', status: false },
    { id: '1ce281', name: 'truong', status: false },
    { id: 'd64584', name: 'truong', status: false },
    { id: 'aa2441', name: 'truong', status: true },
  ],
});

export const ContextProvider = Context.Provider;
