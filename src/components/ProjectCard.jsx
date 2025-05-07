import '../../styles/ProjectCard.css';

const ProjectCard = ({ title, description, link, image, state, stack }) => {
  return (
    <a href={link}>
      <div className='project-card'>
        <img src={image} alt='Preview' />
        <div className='project-description'>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Estado: {state}</p>
          <div className='badges'>
            <p>Stack utilizado: </p>
            {stack.map((badgeUrl, index) => (
              <img key={index} src={badgeUrl} alt={`stack badge ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};
export default ProjectCard;
