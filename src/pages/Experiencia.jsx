import '../../styles/Experiencia.css';
import { experience } from '../data/experienceData';

const Experiencia = () => {
  return (
    <main>
      <h2>Experiencia laboral</h2>
      {experience.map((exp, index) => (
        <div className='jobDescription'>
          <h3>{exp.job}</h3>
          <h4>{exp.company}</h4>
          <h4>{exp.time}</h4>
          <p>{exp.description}</p>
        </div>
      ))}
    </main>
  );
};
export default Experiencia;
