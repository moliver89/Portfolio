import '../../styles/Footer.css';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer>
      {language === 'Español' ? (
        <p> &copy; 2025 - Todos los derechos reservados</p>
      ) : (
        <p> &copy; 2025 - All rights reserved</p>
      )}
    </footer>
  );
};
export default Footer;
