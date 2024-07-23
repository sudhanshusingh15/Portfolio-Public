import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage/index';
import { About } from './pages/about';
import { Dukaan } from './pages/work/dukaan';
import { Pathology } from './pages/work/pathology';
import { ChaiMoh } from './pages/work/chaimoh';
import { LiveFeed } from './pages/work/livefeed';


function App() {
  useEffect(() => {
    document.title = "Sudhanhu Singh • Software Dev";
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/work/dukaan" element={<Dukaan />} />
            <Route path="/work/digitalpathology" element={<Pathology />} />
            <Route path="/work/chaimoh" element={<ChaiMoh />} />
            <Route path="/work/livefeed" element={<LiveFeed />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;