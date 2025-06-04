import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

import '../../styles/AboutMe.css';

const AboutMe = () => {
  const { language } = useContext(LanguageContext);
  return (
    <main className='aboutMePage'>
      {language === 'Español' ? (
        <>
          <h2>Sobre mi</h2>
          <div className='about-text'>
            <p>
              👋 Soy un desarrollador Web FullStack... Claro, ya te lo he
              explicado en el header de este Portfolio y en los "about me" de mi
              LinkedIn, CV y Github si es que los has visto. Entonces dejame
              contarte mi vida laboral y cómo llegué a ser el tipo de
              desarrollador que soy hoy en día y qué puedo aportar.
            </p>

            <p>
              🏪 Desde muy temprana edad empecé en el mundo laboral en una
              empresa familiar donde aprendí a enfrentarme al mundo real: a la
              atención al cliente (interpretación de lo que este quiere y de qué
              manera solucionarlo), al trato con proveedores (tanto en la
              demanda de lo que la empresa quería como en la proyección de
              nuevas cosas a incorporar) y al trabajo en equipo con mis
              compañeros para llevar a cabo las diversas tareas que la empresa
              requería.
            </p>

            <p>
              📚 Mientras adquiría cada vez más experiencia en el mundo real,
              también hizo que mi carrera universitaria no llevara el ritmo y
              velocidad que me hubiesen gustado. Esa carrera era Licenciatura en
              Sistemas en la Facultad de Informática de la Universidad Nacional
              de La Plata (UNLP) en Argentina.
            </p>

            <p>
              💡 Lento o no, ahí noté lo mucho que disfrutaba el mundo de la
              programación. El tener que aplicar la lógica a las cosas para
              resolverlas y conseguir ese shock de serotonina casi adictivo
              cuando las cosas terminaban funcionando.
            </p>

            <p>
              ⚠️ Lamentablemente, la empresa familiar empezó a pasar malos
              momentos y se aproximaba su cierre, por lo que tuve que buscar un
              trabajo full-time, no solo para mí sino también para ayudar a mi
              familia. Ahí fue cuando a la carrera le puse un "Stop".
            </p>

            <p>
              📱 En el medio tuve otros trabajos de corta estadía hasta que
              empecé en una empresa de telefonía con muchas sucursales a lo
              largo de la ciudad de La Plata. Empecé en un local pequeño
              aprendiendo sobre el rubro pero a su vez volcando todo lo
              aprendido en mis ya 9 años de experiencia en atención al público.
            </p>

            <p>
              🚀 Rápidamente comencé a escalar y llegué, luego de 6 meses, al
              principal local de la franquicia. Luego de 2 años pasé a ser el
              Encargado de Tienda, teniendo trato directo con los supervisores
              (Facilitador o Scrum Master) y teniendo a cargo a 2 personas. Por
              2 años seguidos fui el mayor vendedor entre unos 30 de toda la
              franquicia. Pero había llegado a mi techo.
            </p>

            <p>
              🌍 Ahí fue cuando sentí la llamada de nuevos desafíos y me vine
              para Europa. En mi primer trabajo fui Relaciones Públicas en
              Ibiza, en un año post-pandemia donde las cosas todavía no
              funcionaban "normalmente". Así y todo, fue una experiencia muy
              enriquecedora donde mejoré mucho el contacto en frío con clientes
              y donde puse en práctica los idiomas.
            </p>

            <p>
              🗣️ Si bien en Argentina tuve una buena educación en inglés
              (llegando a un First Certificate), todavía no había tenido la
              oportunidad de ponerlo en práctica. Noté cómo, aunque al principio
              estaba un poco oxidado, mejoraba muy rápido día a día al punto que
              ya me manejaba (hasta el día de hoy) casi como si fuera mi lengua
              nativa.
            </p>

            <p>
              🇮🇹 Entre ello (al tener muchos compañeros y más clientes con esa
              lengua nativa) y al cabo de 4 meses, aprendí una nueva lengua:
              italiano. Ahi me di cuenta que el aprendizaje no era algo que me
              costara demasiado.
            </p>

            <p>
              🏗️ Al terminar la temporada me mudé a Valencia, donde un primo mío
              ya estaba radicado desde hacía 20 años con su empresa. Empecé a
              trabajar con él hasta el día de hoy, donde volqué y vuelco toda la
              experiencia adquirida en mi anterior vida laboral, y sigo
              adquiriendo nuevas.
            </p>

            <p>
              💻 Para el año 2023 fue que gracias a unas publicidades de
              Instagram vi que tenía la posibilidad de volver a lo que tanto
              disfrutaba: la informática. Sin tener que empezar una carrera
              universitaria nuevamente, al cabo de unos meses podría aprender
              nuevos lenguajes de programación y certificarme.
            </p>

            <p>
              🙏 Y así, finalmente, después de mucho tiempo, pude volver a
              estudiar lo que realmente me apasiona. Espero no haberte aburrido,
              y si llegaste hasta acá creo que estás más cerca de entender todo
              lo que puedo aportarle a este mundillo: desde mi experiencia, pero
              sobre todo desde la pasión y las ganas que le voy a poner.
            </p>

            <p>
              Un saludo grande,
              <br />
              Mauro.
            </p>
          </div>

          {/* <p>
            Soy un desarrollador Web FullStack... Claro, ya te lo he explicado
            en el header de este Portfolio y en los about me de mi LinkedIn, CV
            y Github si es que los has visto. Entonces dejame contarte mi vida
            laboral y como llegue a ser el tipo de desarrollador que soy en dia
            y que puedo aportar. Desde muy temprana edad empece en el mundo
            laboral en una empresa familiar donde aprendi a enfrentarme al mundo
            real. A la atencion al cliente(interpretacion de lo que este quiere
            y de que manera solucionarlo), al trato con proveedores(tanto en la
            demanda de lo que la empresa queria como en la proyeccion de nuevas
            cosas a incorporar) y al trabajo en equipo con mis compañeros para
            llevar a cabo las diversas tareas que la empresa requeria. Asi
            mientras adquiria cada vez mas experiencia en el mundo real tambien
            hizo que mi carrera universitaria no llevara el ritmo y velocidad
            que me hubiesen gustado. Esa carrera era Licenciatura en Sistemas en
            la Facultad de Informatica de la Universidad Nacional de La
            Plata(UNLP) en Argentina. Lento o no, ahi note lo mucho que
            disfrutaba el mundo de la programacion. El tener que aplicar la
            logica a las cosas para resolverlas y conseguir ese shock de
            serotonina casi adictivo cuando las cosas terminaban funcionando.
            Lamentablemente la empresa familiar empezo a pasar malos momento y
            se aproximaba su cierre por lo que tuve que buscar un trabajo
            full-time no solo para mi si no tambien para ayudar a mi familia.
            Ahi fue cuando a la carrera le puse un Stop. En el medio tuve otros
            trabajos de corta estadia hasta que empece en una empresa de
            Telefonia con muchas sucursales a lo largo de la ciudad de La Plata.
            Ahi empece en un local pequeño aprendiendo sobre el rubro pero a su
            vez volcando todo lo aprendido en mis ya 9 años de experiencia en
            locales con atencion al publico. Rapidamente comence a escalar y
            llegue luego de 6 meses al principal local de la franquicia que tras
            un renaming estaba empezando a vender cada vez mas y mas. Luego de 2
            años pase a ser el Encargado de Tienda, teniendo el trato directo
            con los supervisores de los locales(Facilitador o Scrum Master) y
            teniendo a cargo a 2 personas en la tienda. Por 2 años seguidos fui
            el mayor vendedor de entre unos 30 de toda la franquicia. Pero habia
            llegado a mi techo. Ahi fue cuando senti la llamada de nuevos
            desafios y me vine para Europa. En mi primer trabajo fui Relaciones
            Publicas en Ibiza en un año post-pandemia donde las cosas todavia no
            funcionaban "normalmente". Asi y todo fue una experiencia muy
            enriquecedora donde mejore mucho el contacto en frio con posibles
            clientes y donde puse en practica los idiomas. Si bien en Argentina
            tuve una buena educacion llegando a un First Certificate en ingles
            todavia no habia tenido la oportunidad en poner en practica todo lo
            que sabia. Note como, aunque al principio con un idioma un poco
            oxidado, mejoraba muy rapido dia a dia al punto que ya ni pensaba
            para hablar y ya me manejaba(hasta el dia de hoy inclusive) casi
            como si fuera mi lengua nativa. Entre ello(al tener muchos
            compañeros y mas clientes de esa habla)y al cabo de 4 meses aprendi
            una nueva lengua: italiano. Ahi me di cuenta que el aprendizaje para
            mi no era algo que me costara demasiado. Al terminar la temporada me
            mude para Valencia donde un primo mio ya estaba radicado hacia 20
            años con su empresa. Empece a trabajar con el hasta el dia de hoy
            donde volque y vuelco toda la experiencia adquirida en mi anterior
            vida laboral y sigo adquiriendo nuevas. Para el año 2023 fue que
            gracias a unas publicidades de Instagram vi que tenia la posibilidad
            de volver a lo que tanto disfrutaba que es la informatica. Sin tener
            que empezar un estudio universitario nuevamente al cabo de unos
            meses podria aprender nuevos lenguajes de programacion(lo que mas
            disfruto de la informatica) y certificarme y asi al cabo de mucho
            tiempo poder finalmente trabajar de lo que tanto disfruto. Espero no
            haberlos aburrido y si llegaste hasta aqui creo que estas mas cerca
            de entender todo lo que puedo aportarle a este mundillo, desde mi
            experiencia pero sobre todo desde la pasion y las ganas que le
            pondre. Un saludo grande, Mauro.
          </p> */}
        </>
      ) : (
        <h2>About me</h2>
      )}
    </main>
  );
};

export default AboutMe;
