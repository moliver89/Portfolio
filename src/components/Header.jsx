import { useContext } from 'react';
import '../../styles/Header.css';
import { LanguageContext } from '../contexts/LanguageContext';

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  console.log(language);

  return (
    <main className='barraHeader'>
      <nav className='barraNavegadora'>
        {language === 'Español' ? (
          <>
            <a href='/'>Mis Proyectos</a>
            <a href='/experiencia'>Experiencia</a>
            <a href='/aboutme'>Sobre mi</a>
          </>
        ) : (
          <>
            <a href='/'>My Projects</a>
            <a href='/experiencia'>Experience</a>
            <a href='/aboutme'>About me</a>
          </>
        )}
      </nav>
      <div className='flags'>
        <button
          title='Español'
          className={language === 'Español' ? 'selected' : ''}
          onClick={() => setLanguage('Español')}
        >
          <img
            src='https://flagcdn.com/es.svg'
            width='30'
            height={15}
            alt='Spain'
          />
        </button>
        <button
          title='English'
          className={language === 'English' ? 'selected' : ''}
          onClick={() => setLanguage('English')}
        >
          <img
            src='https://flagcdn.com/gb.svg'
            width='30'
            height={15}
            alt='United Kingdom'
          />
        </button>
      </div>
      <div className='banner'>
        <img
          className='img-perfil'
          src='/foto de perfil.jpeg'
          alt='Foto de perfil'
        />
        <div className='titulo'>
          <h1>Mauro Oliver</h1>
          <h3>FullStack Developer</h3>
          {language === 'Español' ? (
            <p>
              Desarrollador web Fullstack recientemente certificado. Poseo
              amplia experiencia en trato de personas tanto en trabajo en equipo
              como atención a clientes, listo para volcar estas habilidades en
              favor del equipo. Idioma ingles fluido gracias al estudio en
              colegio bilingüe y el uso constante en mis trabajos. Considerado
              un “fast-lerner”, estoy siempre predispuesto a ampliar mis
              conocimientos y crecer profesionalmente.
            </p>
          ) : (
            <p>
              Certified Junior Fullstack Web Developer. I have strongexperience
              in interpersonal skills, both in team collaboration and customer
              service, and I am ready to apply them for the benefit of the team.
              I am fluent in English, thanks to my bilingual education and
              consistent use in various jobs. I consider myself a fast learner,
              always looking forward for personal and professional growth.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};
export default Header;
