import React, { createContext, useState } from 'react';

// Create a context
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // State to manage the current user
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
