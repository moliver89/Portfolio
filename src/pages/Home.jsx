import '../../styles/Home.css';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';

const Home = () => {
  return (
    <main>
      <h2>Mis Proyectos</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </main>
  );
};
export default Home;
