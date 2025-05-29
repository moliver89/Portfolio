import { useContext } from 'react';
import '../../styles/Experiencia.css';
import { experience } from '../data/experienceData';
import { experienceEng } from '../data/experienceDataEnglish';
import { LanguageContext } from '../contexts/LanguageContext';

const Experiencia = () => {
  const { language } = useContext(LanguageContext);
  return (
    <main>
      {language === 'Español' ? (
        <>
          <h2>Experiencia laboral</h2>
          <div className='experience-container'>
            {experience.map((exp, index) => (
              <div key={index} className='jobDescription'>
                <div className='jobTitle'>
                  <h3>{exp.job}</h3>
                  <h4>{exp.company}</h4>
                  <h4>{exp.time}</h4>
                </div>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>Working Experience</h2>
          <div className='experience-container'>
            {experienceEng.map((exp, index) => (
              <div key={index} className='jobDescription'>
                <div className='jobTitle'>
                  <h3>{exp.job}</h3>
                  <h4>{exp.company}</h4>
                  <h4>{exp.time}</h4>
                </div>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
};
export default Experiencia;
