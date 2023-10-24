import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children,initialLanguage = "en" }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedAnswers, setSelectedAnswers] = useState([]);


  return (
    <AppContext.Provider value={{ selectedLanguage,setSelectedLanguage,selectedCategory,setSelectedCategory,  selectedAnswers, setSelectedAnswers }}>
      {children}
    </AppContext.Provider>
  );
};