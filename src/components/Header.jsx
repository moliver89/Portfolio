import '../../styles/Header.css';

const Header = () => {
  return (
    <main className='barraHeader'>
      <nav className='barraNavegadora'>
        <a href='/'>Mis Proyectos</a>
        <a href='/experiencia'>Experiencia</a>
        <a>About me</a>
      </nav>
      <div className='flags'>
        <button title='Español'>
          <img
            src='https://flagcdn.com/es.svg'
            width='30'
            height={16}
            alt='Spain'
          />
        </button>
        <button title='English'>
          <img
            src='https://flagcdn.com/gb.svg'
            width='30'
            height={16}
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
          <p>
            Desarrollador web Fullstack recientemente certificado. Poseo amplia
            experiencia en trato de personas tanto en trabajo en equipo como
            atención a clientes, listo para volcar estas habilidades en favor
            del equipo. Idioma ingles fluido gracias al estudio en colegio
            bilingüe y el uso constante en mis trabajos. Considerado un
            “fast-lerner”, estoy siempre predispuesto a ampliar mis
            conocimientos y crecer profesionalmente.
          </p>
        </div>
      </div>
    </main>
  );
};
export default Header;
