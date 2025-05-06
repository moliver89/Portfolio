import '../../styles/ProjectCard.css';

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <a href={link}>
      <div className='project-card'>
        <img src={image} alt='Preview' />
        <div className='project-description'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};
export default ProjectCard;
