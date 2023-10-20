import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children,initialLanguage = "en" }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  return (
    <AppContext.Provider value={{ selectedLanguage }}>
      {children}
    </AppContext.Provider>
  );
};