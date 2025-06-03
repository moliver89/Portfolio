import { Route, Routes } from 'react-router-dom';
// Importamos los componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Experiencia from './pages/Experiencia';
// Importamos estilos
import '../index.css';
import AboutMe from './pages/AboutMe';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='experiencia' element={<Experiencia />} />
        <Route path='aboutme' element={<AboutMe />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
