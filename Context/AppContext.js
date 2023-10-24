import React, { createContext, useContext, useEffect, useState } from "react";
import { categories } from "../components/data";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children, initialLanguage = "en" }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const changeSelectedCategory = (category) => {
    setSelectedCategory(category);
    if (selectedCategory?.name != category.name)
      setSelectedAnswers([])
  }

  const changeSelectedLanguage = (language) => {
    
    if (selectedLanguage != language && selectedCategory) {
      let category = {}
      if (language == "en") {
        console.log()
        category = categories.en.categories.find((category) => category.category_id == selectedCategory.category_id)
      } else {
        category = categories.tr.categories.find((category) => category.category_id == selectedCategory.category_id)
      }
      setSelectedCategory(category);
    }

    setSelectedLanguage(language);
  }



  return (
    <AppContext.Provider value={{ selectedLanguage, changeSelectedLanguage, selectedCategory, changeSelectedCategory, selectedAnswers, setSelectedAnswers }}>
      {children}
    </AppContext.Provider>
  );
};