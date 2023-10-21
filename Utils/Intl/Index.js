import React from "react"
import translations from "./translations"
import { useAppContext } from "@/Context/AppContext"

const GetLocalizedText = (props) => {

    const {id} = props
    const {selectedLanguage} = useAppContext()

    const translation = translations[id];

    if (!translation) {
      return id; // Çeviri bulunamazsa anahtarı geri döndür
    }
  
    return translation[selectedLanguage] || id;
}

export default GetLocalizedText;