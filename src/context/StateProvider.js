import React, { createContext, useContext, useReducer } from 'react';

// prepare Contxt
export const StateContext = createContext();

// wrap our app
export const StateProvider = ({ reducer, initialSatte, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialSatte)}>
    {children}
  </StateContext.Provider>
);

// pull information
export const useSateValue = () => useContext(StateContext);
