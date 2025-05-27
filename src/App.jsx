import { Route, Routes } from 'react-router-dom';
// Importamos los componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Experiencia from './pages/Experiencia';
// Importamos estilos
import '../index.css';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='experiencia' element={<Experiencia />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
