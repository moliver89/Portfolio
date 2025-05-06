import '../../styles/Header.css';

const Header = () => {
  return (
    <main className='barraHeader'>
      <div className='barraNavegadora'>
        <a href='/'>Mis Proyectos</a>
        <a>Experiencia</a>
        <a>About me</a>
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
        </div>
      </div>
    </main>
  );
};
export default Header;
