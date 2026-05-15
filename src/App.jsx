import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PortafolioPage from './pages/PortafolioPage';
import WebServices from './pages/WebServices';
import CreativeStudioPage from './pages/CreativeStudioPage';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/portafolio" element={<PortafolioPage />} />
            <Route path="/servicios-web" element={<WebServices />} />
            <Route path="/estudio-creativo" element={<CreativeStudioPage />} />
            <Route path="/terminos" element={<Terms />} />
            <Route path="/privacidad" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;