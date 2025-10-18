import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Portada from './pages/Portada';
import Bitacora from './pages/Bitacora';
import Integrantes from './pages/Integrantes';
import APIData from './pages/APIData';
import JSONData from './pages/JSONData';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Portal from './components/Portal';

function AppContent() {
  const [portalOpen, setPortalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setPortalOpen(true);
    const timer = setTimeout(() => setPortalOpen(false), 1500); // Portal dura 1.5 segundos
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div style={{display: 'flex', flex: 1}}>
      <Sidebar/>
      <div style={{marginLeft: '140px', padding: '2rem', width: '100%', flex: 1}}>
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/json-data" element={<JSONData />} />
          <Route path="/api-data" element={<APIData />} />
        </Routes>
      </div>
      <Portal open={portalOpen} duration={1500} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
