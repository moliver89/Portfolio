import '../../styles/ProjectCard.css';

const ProjectCard = ({ title, description, link }) => {
  return (
    <a href={link}>
      <div className='project-card'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};
export default ProjectCard;
