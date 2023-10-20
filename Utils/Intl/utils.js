
import translations from "./translations"

export const getStringLocalized = (id, language) => {
    
        const translation = translations[id];
    
        if (!translation) {
        return id; // Çeviri bulunamazsa anahtarı geri döndür
        }
    
        return translation[language] || id;
}