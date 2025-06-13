import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
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
      <Toaster
        position='top-center'
        toastOptions={{
          duration: 2000,
        }}
      />
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
