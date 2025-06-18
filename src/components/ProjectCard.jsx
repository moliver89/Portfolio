import { useContext } from 'react';
import '../../styles/ProjectCard.css';
import { LanguageContext } from '../contexts/LanguageContext';

const ProjectCard = ({ title, description, link, image, state, stack }) => {
  const { language } = useContext(LanguageContext);
  return (
    <a
      href={link}
      aria-label='Navegar al proyecto. Esto es pagina web o repositorio. Navigate to the project. Web site or repository.'
    >
      <div className='project-card'>
        <img src={image} alt='Preview' />
        <div className='project-description'>
          <h3>{title}</h3>
          <p>{description}</p>
          {language === 'Español' ? (
            <p>Estado: {state}</p>
          ) : (
            <p>State: {state}</p>
          )}

          <div className='badges'>
            {language === 'Español' ? (
              <p>Stack utilizado: </p>
            ) : (
              <p>Used stack: </p>
            )}
            {stack.map(({ name, badge }, index) => (
              <img key={index} src={badge} alt={`stack badge ${name}`} />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};
export default ProjectCard;
