import { useContext } from 'react';
import '../../styles/Home.css';
import ProjectCard from '../components/ProjectCard';
import { LanguageContext } from '../contexts/LanguageContext';
import { projects as projectsEs } from '../data/projectsData';
import { projectsEng } from '../data/projectDataEng';

const Home = () => {
  const { language } = useContext(LanguageContext);
  const projects = language === 'Español' ? projectsEs : projectsEng;
  return (
    <main>
      {language === 'Español' ? <h2>Mis Proyectos</h2> : <h2>My Projects</h2>}
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </main>
  );
};
export default Home;
