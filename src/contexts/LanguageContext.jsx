// Importamos las dependencias necesarias de React (Primer paso)
import { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

// Definimos un componente de Provider para LanguageContext
// La prop `children` contiene los componentes hijos que están anidados dentro del componente `ThemeProvider` en el árbol de componentes.
const LanguageProvider = ({ children }) => {
  // Utilizamos useState para gestionar el idioma.
  // Inicialmente, el idioma está configurado como "Español"
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'Español';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // El componente Provider hace que el "language" y la función "setLanguage" estén disponibles para todos los componentes hijos que estén "suscritos" a este LanguageContext
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Exportamos LanguageContext para que otros componentes puedan usarlo (Primer paso)

export { LanguageContext, LanguageProvider };
