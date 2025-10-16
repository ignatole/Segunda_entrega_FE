import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Portada from './pages/portada/Portada';
import Bitacora from './pages/Bitacora';
import Integrantes from './pages/integrantes/Integrantes';
import SideBar from './components/SideBar';



function App() {

  return (
    <Router>
      <div style={{display: 'flex'}}>
        <SideBar/>
        <div style={{marginLeft: '220px', padding: '2rem', width: '100%'}}>
          <Routes>
            <Route path="/" element={<Portada />} />
            <Route path="/bitacora" element={<Bitacora />} />
            <Route path="/integrantes" element={<Integrantes />} />
          </Routes>
        </div>
      </div>
    </Router>
      
  );
}

export default App;
