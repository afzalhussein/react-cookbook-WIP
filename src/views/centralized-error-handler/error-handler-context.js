import { createContext, useContext } from 'react';

export const ErrorHandlerContext = createContext(() => {});

let setError = () => {};

export const ErrorHandlerProvider = ({ callback, children }) => {
  if (callback) {
    setError = callback;
  }

  return <ErrorHandlerContext.Provider value={setError}>{children}</ErrorHandlerContext.Provider>;
};

export const useErrorHandler = () => useContext(ErrorHandlerContext);
