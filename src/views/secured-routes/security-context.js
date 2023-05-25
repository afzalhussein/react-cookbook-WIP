import { useState, createContext, useContext } from 'react';

export const SecurityContext = createContext({});

export const SecurityProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <SecurityContext.Provider
      value={{
        login: (username, password) => {
          // Note to engineering team:
          // Maybe make this more secure...
          if (username === 'fred' && password === 'password') {
            setLoggedIn(true);
          }
        },
        logout: () => setLoggedIn(false),
        loggedIn
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = () => useContext(SecurityContext);
